import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { DragEndEvent } from "@dnd-kit/core";
import { toast } from "react-hot-toast";

const VALID_PANEL_ORDERS = [
  ["pattern", "editor", "answer"],
  ["editor", "pattern", "answer"],
  ["pattern", "answer", "editor"],
  ["editor", "answer", "pattern"],
  ["answer", "pattern", "editor"],
  ["answer", "editor", "pattern"],
];

const MIN_PANEL_WIDTH = {
  pattern: 300,
  editor: 400,
  answer: 300,
};

export function usePanelManager() {
  const [panelOrder, setPanelOrder] = useState(["pattern", "editor", "answer"]);
  const [patternOpen, setPatternOpen] = useState(true);
  const [editorOpen, setEditorOpen] = useState(true);
  const [answerOpen, setAnswerOpen] = useState(true);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setPanelOrder((items) => {
        const oldIndex = items.indexOf(active.id as string);
        const newIndex = items.indexOf(over.id as string);
        const newOrder = arrayMove(items, oldIndex, newIndex);

        // Validate the new order
        const isValidOrder = VALID_PANEL_ORDERS.some(
          (validOrder) =>
            JSON.stringify(validOrder) === JSON.stringify(newOrder)
        );

        if (!isValidOrder) {
          toast.error(
            "Invalid panel arrangement. Panels must maintain a logical order (e.g., Pattern → Editor → Answer).",
            {
              duration: 3000,
              icon: "⚠️",
              style: {
                background: "#ef4444",
                color: "#fff",
              },
            }
          );
          // Animate back to original position
          return items;
        }

        // Show success feedback
        toast.success("Layout updated!", {
          duration: 2000,
          icon: "✅",
        });

        return newOrder;
      });
    }
  }

  function validatePanelSizes(containerWidth: number) {
    const totalMinWidth = Object.values(MIN_PANEL_WIDTH).reduce(
      (a, b) => a + b,
      0
    );
    if (containerWidth < totalMinWidth) {
      toast.error(
        "Screen width too small for current layout. Please increase window size."
      );
      return false;
    }
    return true;
  }

  return {
    panelOrder,
    patternOpen,
    editorOpen,
    answerOpen,
    setPatternOpen,
    setEditorOpen,
    setAnswerOpen,
    handleDragEnd,
    validatePanelSizes,
    MIN_PANEL_WIDTH,
    setPanelOrder,
  };
}
