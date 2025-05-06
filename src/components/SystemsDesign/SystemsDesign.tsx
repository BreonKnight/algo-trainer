import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../theme/theme-context";
import { cn } from "@/lib/utils";
import { BookOpen, Clock, GraduationCap, ChevronRight, X } from "lucide-react";
import { Switch } from "@headlessui/react";
import { PawPrint } from "lucide-react";

interface Chapter {
  id: number;
  title: string;
  theme: string;
  keyConcepts: string[];
  mainTakeaways: string[];
  notableTerms: string[];
  examples: string[];
  prerequisites: string[];
  difficulty: string;
  readingTime: string;
  keyDiagrams: string[];
  realWorldApplications: string[];
  commonPitfalls: string[];
  bestPractices: string[];
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: "Reliable, Scalable, and Maintainable Applications",
    theme:
      "Introduction to what makes an application data-intensive (handling large quantity, complexity, or velocity of data) as opposed to compute-intensive. The chapter outlines the foundational concerns for any data system: reliability, scalability, and maintainability. It also surveys standard data system components (databases, caches, search indexes, stream and batch processors) that are often combined to build complex applications.",
    keyConcepts: [
      "Reliability – The system should continue to function correctly even when faults occur (e.g. hardware failures, software bugs, human error). Distinguish faults (individual component failures) from failures (the system as a whole stops working). Techniques like redundancy and fault-tolerant design improve reliability.",
      "Scalability – The system's performance should scale reasonably with increased load (data volume, traffic, or complexity). Introduces metrics for load (throughput, QPS, etc.) and performance (latency). Emphasizes looking at percentile latencies (e.g. p95, p99) rather than just averages, since tail latency (worst-case delays) strongly affect user experience.",
      "Maintainability – Over time systems evolve and are worked on by many people, so they must be built for easy maintenance and adaptation. Kleppmann highlights three aspects: Operability (making life easy for ops/DevOps to keep the system running smoothly), Simplicity (managing complexity so the system is easier to understand and change), and Evolvability (ability to make changes, add features, and manage schema or software upgrades over time).",
      "Combining tools: Modern data systems often compose multiple specialized components (e.g. using a database for storage, a cache for speed, a search index for querying, a stream processor for async tasks, etc.). The API hides the integration of these components, essentially creating a custom data platform out of building blocks.",
    ],
    mainTakeaways: [
      "Reliable, scalable, maintainable systems don't happen by accident – they result from careful design focusing on these concerns from the start.",
      "Reliability means expecting things to go wrong and designing to prevent faults from becoming user-visible failures (through redundancy, replication, etc.).",
      "Scalability requires measuring system performance under load and designing architectures (often distributed, 'shared-nothing' systems) that can expand capacity.",
      "Maintainability means the system can be understood and modified by engineers over its lifetime. Good abstractions, clear code, thorough monitoring/telemetry, and minimizing complexity help avoid creating fragile 'legacy' systems.",
    ],
    notableTerms: [
      "Fault vs Failure",
      "Throughput vs Latency",
      "Percentile (p99) latency",
      "Tail latency",
      "Head-of-line blocking",
      "Vertical scaling vs Horizontal scaling (shared-nothing)",
      "Elastic scaling (auto-scaling) vs manual scaling",
      "Operability, Simplicity, Evolvability",
    ],
    examples: [
      "Web service handling requests and tail latency",
      "Single powerful server vs cluster of commodity servers",
      "Database replication for fault tolerance",
      "Load balancing across multiple servers",
    ],
    prerequisites: [
      "Basic understanding of computer systems",
      "Familiarity with web applications",
      "Knowledge of basic networking concepts",
    ],
    difficulty: "Beginner",
    readingTime: "2-3 hours",
    keyDiagrams: [
      "System architecture diagram",
      "Latency distribution graph",
      "Scalability comparison chart",
      "Fault tolerance mechanisms",
    ],
    realWorldApplications: [
      "E-commerce platforms",
      "Social media applications",
      "Financial trading systems",
      "Healthcare information systems",
    ],
    commonPitfalls: [
      "Underestimating failure modes",
      "Not measuring performance metrics",
      "Ignoring technical debt",
      "Over-engineering solutions",
    ],
    bestPractices: [
      "Design for failure",
      "Measure everything",
      "Document system behavior",
      "Plan for growth",
      "Regular performance testing",
    ],
  },
  {
    id: 2,
    title: "Data Models and Query Languages",
    theme:
      "Survey of different data models and their query languages, and how the choice of data model affects application design. The chapter compares the relational model with newer document (NoSQL) and graph data models, discussing their strengths, weaknesses, and use cases. It emphasizes that data modeling is fundamental - the way data is structured in a system influences how you think about problems and what is easy or hard to do.",
    keyConcepts: [
      "Data modeling is fundamental: the way data is structured in a system influences how you think about problems and what is easy or hard to do. Kleppmann reviews three major models:",
      "Relational model – Data is organized in tables with rows and columns, with a fixed schema and powerful SQL for queries (good for structured data and many-to-many relationships).",
      "Document model – Data is stored as hierarchical JSON/BSON documents, often schema-flexible and stored denormalized (good for nesting one-to-many data, schema flexibility, and locality of data reads). Joins are weaker in pure document stores, so many-to-many relationships can be awkward.",
      "Graph model – Data as nodes vertices and edges (relationships), suited for highly interconnected data. Two common approaches: property graphs (e.g. Neo4j) which store arbitrary key-value properties on nodes/edges, and triple stores (RDF/SPARQL, or Datomic's entity-attribute-value model) which represent data as subject–predicate–object triples.",
      "Query language paradigms: Declarative (you specify what result you want, e.g. SQL, Datalog, Cypher) vs Imperative (you specify how to navigate the data, e.g. using a step-by-step traversal API like Gremlin for graphs).",
    ],
    mainTakeaways: [
      "There is no one 'best' data model — the optimal choice depends on the nature of the data and how the application queries it.",
      "Data models profoundly affect how you structure your application's data processing.",
      "The choice of query language (SQL vs NoSQL API vs graph query) also influences developer productivity and bug risk.",
      "Schema evolution must be carefully managed to maintain compatibility.",
    ],
    notableTerms: [
      "Schema-on-write vs Schema-on-read",
      "Normalization vs Denormalization",
      "Declarative vs Imperative queries",
      "Datalog, Cypher, SPARQL",
      "ACID properties",
      "CAP theorem",
      "Eventual consistency",
    ],
    examples: [
      "User data with blog posts in different models",
      "Social network traversals in graph vs relational models",
      "E-commerce product catalog in document vs relational models",
    ],
    prerequisites: [
      "Understanding of basic data structures",
      "Familiarity with SQL",
      "Basic knowledge of JSON/XML",
    ],
    difficulty: "Intermediate",
    readingTime: "3-4 hours",
    keyDiagrams: [
      "Relational schema diagram",
      "Document model structure",
      "Graph model visualization",
      "Query execution plans",
    ],
    realWorldApplications: [
      "Content management systems",
      "Social networks",
      "Recommendation engines",
      "Knowledge graphs",
    ],
    commonPitfalls: [
      "Choosing the wrong data model for the use case",
      "Over-normalization",
      "Ignoring query performance",
      "Poor schema design",
    ],
    bestPractices: [
      "Start with the simplest model that works",
      "Consider query patterns early",
      "Plan for schema evolution",
      "Document data model decisions",
    ],
  },
  {
    id: 4,
    title: "Encoding and Evolution",
    theme:
      "Data encoding formats and how data evolves over time. This chapter discusses how to serialize data for storage or communication, and how to handle schema changes and compatibility as applications evolve. It covers formats like JSON, XML, and binary encodings (Thrift, Protocol Buffers, Avro) and delves into schema evolution strategies for backward and forward compatibility.",
    keyConcepts: [
      "Encoding Formats: Different ways to encode data structures: human-readable text formats (JSON, XML, CSV) vs. binary formats (Thrift, ProtoBuf, Avro). Text formats are flexible and easy for debugging but larger in size; binary formats are compact and often faster to parse.",
      "Schema Evolution: How to change the structure of data without breaking compatibility. The idea of backward compatibility (new readers can still understand old data) and forward compatibility (old readers can skip over or default new fields in new data).",
      "Data Flow and APIs: Discusses how data is encoded when sent between services and how APIs evolve. There's a section on RPC (Remote Procedure Calls) vs REST/HTTP+JSON, and the pitfalls of making services too tightly coupled.",
      "Evolution in Practice: Strategies like adding new fields with default values, using versioning in APIs, or message formats. If you control both client and server upgrades, one strategy is to deploy servers that can handle both old and new formats during a transition.",
    ],
    mainTakeaways: [
      "Choosing an appropriate data encoding is important for efficient communication and future-proofing.",
      "Always design protocols and storage with evolution in mind: assume that at some point you will need to add or change fields.",
      "There is no silver bullet for backwards compatibility – but the chapter gives guidelines (like never remove a field that clients might still send).",
      "Decoupling is key: services communicating via a well-defined, evolvable API (or via an event log) can be changed independently.",
    ],
    notableTerms: [
      "Schema Evolution",
      "Backward/Forward Compatibility",
      "RPC vs REST",
      "Idempotency",
      "Protocol Buffers",
      "Avro Schema",
      "Thrift",
    ],
    examples: [
      "Evolving a data schema with new fields",
      "RPC definition changes and versioning",
      "API versioning strategies",
    ],
    prerequisites: [
      "Understanding of data formats",
      "Basic API design knowledge",
      "Familiarity with JSON/XML",
    ],
    difficulty: "Intermediate",
    readingTime: "2-3 hours",
    keyDiagrams: [
      "Schema evolution timeline",
      "Data flow diagrams",
      "API versioning strategies",
      "Protocol buffer structure",
    ],
    realWorldApplications: [
      "Microservices communication",
      "API development",
      "Data pipeline integration",
      "Service mesh architectures",
    ],
    commonPitfalls: [
      "Breaking changes in APIs",
      "Poor versioning strategy",
      "Inadequate documentation",
      "Ignoring backward compatibility",
    ],
    bestPractices: [
      "Design for evolution",
      "Maintain backward compatibility",
      "Document changes thoroughly",
      "Use appropriate encoding formats",
    ],
  },
  {
    id: 10,
    title: "Batch Processing",
    theme:
      "This chapter shifts focus to derived data: how to process large data sets in bulk (offline, not user request-driven) to compute results like analytics, reports, or transformations. It covers the principles of batch processing with systems like Hadoop MapReduce and its successors, and how batch workflows turn raw data into useful aggregated data.",
    keyConcepts: [
      "MapReduce Paradigm: Introduced by Google and popularized via Apache Hadoop, MapReduce was a pioneering batch processing model.",
      "Joining Data in Batch: Real-world batch jobs often need to combine multiple datasets. MapReduce can perform joins in two main approaches: Reduce-side join and Map-side join.",
      "Evolution beyond MapReduce: Newer dataflow engines (like Apache Spark, Apache Flink, or Tez) offer more flexible paradigms.",
      "Data Pipelines and Workflow: The chapter also touches on the idea of workflow managers or pipeline orchestration.",
    ],
    mainTakeaways: [
      "Batch processing is about throughput over latency: crunching large volumes of data efficiently.",
      "The MapReduce model, while not as dominant now, introduced key ideas for scaling out data processing.",
      "Modern batch engines improve on MapReduce by supporting more complex workflows in one job.",
      "Having recomputability and storing raw data is valuable – if you have the raw logs, you can always derive new insights with batch jobs later.",
    ],
    notableTerms: [
      "MapReduce",
      "Shuffle",
      "DAG of tasks",
      "Checkpointing",
      "Data lineage",
      "Partition pruning",
      "Data skew",
    ],
    examples: [
      "Word count in MapReduce",
      "Join operations in batch processing",
      "Log analysis pipeline",
      "ETL workflows",
    ],
    prerequisites: [
      "Basic distributed systems concepts",
      "Understanding of data processing",
      "Familiarity with parallel computing",
    ],
    difficulty: "Intermediate",
    readingTime: "3-4 hours",
    keyDiagrams: [
      "MapReduce workflow",
      "Data pipeline architecture",
      "Batch processing patterns",
      "Job scheduling flow",
    ],
    realWorldApplications: [
      "Data warehousing",
      "Log processing",
      "Machine learning training",
      "Analytics platforms",
    ],
    commonPitfalls: [
      "Poor data partitioning",
      "Inefficient joins",
      "Resource underutilization",
      "Lack of monitoring",
    ],
    bestPractices: [
      "Design for fault tolerance",
      "Optimize data locality",
      "Monitor job progress",
      "Plan resource allocation",
    ],
  },
  {
    id: 12,
    title: "The Future of Data Systems",
    theme:
      "A forward-looking discussion on emerging trends and the author's perspective on where data-intensive applications are headed. It revisits the themes of the book (reliability, scalability, maintainability, batch/stream unification, etc.) and speculates on improvements and new paradigms that could shape the future of databases and data processing.",
    keyConcepts: [
      "Weaknesses in Current Systems: Distributed transactions (XA/2PC) are known to have poor performance and fault-tolerance characteristics.",
      "Unification of Batch and Stream: Today's pipelines often use a Lambda architecture: batch jobs for accuracy and streaming for speed, which adds complexity.",
      "Unbundling the Database: Instead of one monolithic database doing everything, we might have specialized components connected by streams of events.",
      "Better Guarantees and Self-Healing: The author muses about higher-level guarantees that future systems could provide.",
    ],
    mainTakeaways: [
      "The data systems field is still evolving; the 'ideal' system that is scalable, strongly consistent, easy to use, and flexible is a moving target.",
      "One specific direction is to reduce the complexity that organizations face today in glueing together dozens of specialized systems.",
      "The chapter conveys optimism that we can do better than today's status quo.",
      "It also subtly encourages the reader to think outside the box: maybe break apart the monoliths, leverage logs as a core abstraction.",
    ],
    notableTerms: [
      "Lambda Architecture",
      "Event sourcing",
      "Change Data Capture",
      "Distributed ledger",
      "GDPR",
      "Data mesh",
      "Polyglot persistence",
    ],
    examples: [
      "Unified batch/stream processing",
      "Event-driven architecture",
      "Privacy-preserving analytics",
      "Self-healing systems",
    ],
    prerequisites: [
      "Understanding of current data systems",
      "Knowledge of industry trends",
      "Awareness of data privacy concerns",
    ],
    difficulty: "Intermediate",
    readingTime: "2-3 hours",
    keyDiagrams: [
      "Future architecture trends",
      "Unified processing model",
      "Data privacy framework",
      "Evolution of data systems",
    ],
    realWorldApplications: [
      "Modern data platforms",
      "Privacy-focused systems",
      "Regulatory compliance",
      "Ethical AI systems",
    ],
    commonPitfalls: [
      "Over-engineering",
      "Ignoring privacy concerns",
      "Premature optimization",
      "Neglecting security",
    ],
    bestPractices: [
      "Design for evolution",
      "Consider ethical implications",
      "Plan for privacy",
      "Stay informed of trends",
    ],
  },
  {
    id: 3,
    title: "Storage and Retrieval",
    theme:
      "How databases internally store data on disk and retrieve it efficiently. This chapter dives into storage engine architecture, comparing log-structured storage (append-only logs and LSM-trees) vs. page-oriented storage (B-Tree indexes), and also touches on data warehousing storage (columnar formats) and indexing strategies. It distinguishes systems optimized for OLTP (transaction processing) vs. OLAP (analytics) workloads.",
    keyConcepts: [
      "Log-Structured Storage & LSM-Trees: Many write-optimized databases use a log-based approach, appending writes to disk sequentially. Data is organized in segments and merged in the background. One implementation is the Log-Structured Merge-Tree (LSM), which maintains a memory buffer (memtable) and periodically writes sorted segments to disk (SSTables), merging and compacting them over time.",
      "Hash Indexes vs Sorted Indexes: A simple form of log-structured storage uses hash maps in memory to point to file offsets (as in Bitcask/Riak), which is fast for key-value lookups but doesn't support efficient range scans. Sorted-string tables (SSTables) enable merging and range queries by keeping data sorted by key.",
      "B-Trees: The most common index structure for databases, optimized for random reads/writes on disk. B-Trees organize data in fixed-size blocks (pages), maintaining a tree of keys that guides search to the correct page.",
      "Storage and Retrieval in OLTP vs OLAP: OLTP systems favor row-based storage (storing all columns of a row together) for quick reads/writes of single records, whereas OLAP systems (data warehouses) often use columnar storage – storing each column separately for compression and efficient scans on columns of interest.",
    ],
    mainTakeaways: [
      "Storage engines use different structures under the hood, and understanding these helps in choosing the right database for your use case.",
      "The design of indexing structures (hash vs sorted, B-tree vs LSM) affects not only performance but also capabilities.",
      "OLAP vs OLTP divergence: one size does not fit all. Systems optimized for analytics use very different storage optimizations than systems for handling high rates of small transactions.",
      "Many modern databases blend approaches (some use B-tree indexes but also log-structured techniques, or offer both row and column storage in one system).",
    ],
    notableTerms: [
      "LSM-Tree",
      "B-Tree/B+Tree",
      "Write-Ahead Log",
      "Column-oriented storage",
      "Compaction",
      "Bloom filters",
      "SSTables",
    ],
    examples: [
      "B-Tree structure showing pages and child pointers",
      "LSM-tree workflow with memtable and SSTables",
      "Columnar storage for analytics",
    ],
    prerequisites: [
      "Understanding of basic data structures",
      "Knowledge of file systems",
      "Basic database concepts",
    ],
    difficulty: "Advanced",
    readingTime: "4-5 hours",
    keyDiagrams: [
      "B-Tree structure diagram",
      "LSM-Tree compaction process",
      "Storage engine architecture",
      "Index structure comparison",
    ],
    realWorldApplications: [
      "High-performance databases",
      "Time-series databases",
      "Analytics platforms",
      "Search engines",
    ],
    commonPitfalls: [
      "Ignoring write amplification",
      "Poor index selection",
      "Inadequate monitoring",
      "Not considering storage characteristics",
    ],
    bestPractices: [
      "Choose appropriate storage engine",
      "Monitor storage metrics",
      "Regular maintenance",
      "Backup strategies",
    ],
  },
  {
    id: 5,
    title: "Replication",
    theme:
      "Replication is keeping copies of the same data on multiple nodes. This chapter explores why and how systems replicate data for reliability and scalability, and compares different replication architectures (leader-based, multi-leader, leaderless). It also covers consistency issues that arise with replication and how to handle them.",
    keyConcepts: [
      "Reasons for Replication: To increase data reliability/availability (if one node dies, others have a copy), to improve read throughput (many nodes can serve read queries in parallel), and to reduce latency by placing data closer to users (geo-replication).",
      "Leader-based (Single-Leader) Replication: One node acts as the leader (primary) and clients send all writes to this leader. The leader serializes the writes (defining an order) and then propagates the changes to follower replicas (secondary nodes).",
      "Multi-Leader Replication (Master-Master): Multiple nodes accept writes (useful for multi-datacenter setups, collaborative apps, or offline clients syncing later). Each leader asynchronously replicates its writes to the other leaders.",
      "Leaderless Replication: Used by Dynamo-style systems (Cassandra, Riak, Amazon Dynamo). There is no single leader; any replica can accept writes which are sent to all replicas. Consistency is achieved via quorums.",
    ],
    mainTakeaways: [
      "Replication is essential for fault tolerance and scaling reads, but it introduces the challenge of keeping data copies consistent.",
      "With any replication, one must decide on consistency guarantees for the application: strong consistency vs eventual consistency.",
      "Handling failover correctly in leader-based systems is hard (further explored in later chapters with consensus).",
      "Multi-leader and leaderless systems avoid single points of failure for writes but push complexity to conflict resolution.",
    ],
    notableTerms: [
      "Synchronous vs Asynchronous replication",
      "Failover",
      "Split brain",
      "Quorum (W+R>N)",
      "Eventual consistency",
      "Read-after-write consistency",
      "Monotonic reads",
    ],
    examples: [
      "Leader failure and follower promotion",
      "Write conflicts in multi-leader systems",
      "Quorum-based read/write operations",
    ],
    prerequisites: [
      "Understanding of basic networking",
      "Knowledge of database concepts",
      "Familiarity with distributed systems",
    ],
    difficulty: "Advanced",
    readingTime: "3-4 hours",
    keyDiagrams: [
      "Replication topologies",
      "Failover scenarios",
      "Quorum diagrams",
      "Conflict resolution flows",
    ],
    realWorldApplications: [
      "Database clusters",
      "Content delivery networks",
      "Global applications",
      "High-availability systems",
    ],
    commonPitfalls: [
      "Split brain scenarios",
      "Inconsistent replication",
      "Poor failover handling",
      "Network partition issues",
    ],
    bestPractices: [
      "Monitor replication lag",
      "Test failover procedures",
      "Implement proper quorum",
      "Handle conflicts gracefully",
    ],
  },
  {
    id: 6,
    title: "Partitioning",
    theme:
      "Partitioning (also called sharding) data across multiple nodes to scale beyond the limits of a single machine. This chapter covers how data is split into partitions, how to route queries to the right partition, and challenges like uneven data distribution, rebalancing, and operations across partitions.",
    keyConcepts: [
      "What is Partitioning: Instead of every node having all data, each node has only a subset (partition) of the data. Different systems call partitions by various names – shard, region, tablet, vnode, etc.",
      "Partitioning Strategies: By Key Range (assign continuous ranges of a key space to each partition) and By Hash of Key (apply a hash function to the key and use that to determine the partition).",
      "Secondary Indexes in a Partitioned DB: Local index per shard (scatter-gather) vs Global index. Each approach has trade-offs between read efficiency and write complexity.",
      "Rebalancing Partitions: As nodes are added or removed, or data distribution changes, you may need to move data between partitions. Strategies include fixed number of partitions with virtual nodes and dynamic partitioning.",
    ],
    mainTakeaways: [
      "Proper partitioning is essential for scalable systems, but it adds complexity in query processing and data management.",
      "Once partitioned, coordination becomes necessary: you need a way to route requests to the right partition.",
      "Distributed transactions or joins across partitions are not straightforward.",
      "Rebalancing shards is non-trivial; a good design tries to minimize the need for frequent rebalancing.",
    ],
    notableTerms: [
      "Sharding",
      "Consistent Hashing",
      "Virtual nodes",
      "Scatter-gather query",
      "Hot spots",
      "Partition tolerance",
      "Data locality",
    ],
    examples: [
      "Consistent hashing ring for partition assignment",
      "Query routing in a partitioned system",
      "Hot spot mitigation strategies",
    ],
    prerequisites: [
      "Understanding of hashing",
      "Basic distributed systems knowledge",
      "Database concepts",
    ],
    difficulty: "Advanced",
    readingTime: "3-4 hours",
    keyDiagrams: [
      "Partitioning strategies",
      "Consistent hashing ring",
      "Query routing flow",
      "Rebalancing process",
    ],
    realWorldApplications: [
      "Large-scale databases",
      "Distributed file systems",
      "Content delivery networks",
      "Search engines",
    ],
    commonPitfalls: [
      "Uneven data distribution",
      "Hot spots",
      "Complex query patterns",
      "Rebalancing overhead",
    ],
    bestPractices: [
      "Choose appropriate partitioning strategy",
      "Monitor partition distribution",
      "Plan for rebalancing",
      "Consider query patterns",
    ],
  },
  {
    id: 7,
    title: "Transactions",
    theme:
      "In distributed systems or databases, a transaction is a mechanism to group multiple reads/writes into a single logical operation that either completely succeeds or fails. This chapter explains the principles of database transactions, the ACID properties, isolation levels, and how transactions can be implemented. It digs into concurrency issues and how databases ensure consistency when many transactions execute in parallel.",
    keyConcepts: [
      "ACID Properties: Atomicity (all or nothing), Consistency (the transaction moves the database from one valid state to another), Isolation (concurrent transactions don't interfere), Durability (once committed, data won't be lost).",
      "Isolation and Concurrency: The most subtle property is isolation – how to make concurrent operations result in the same state as some serial order of transactions.",
      "Anomalies and Concurrency Bugs: Examples include Dirty read, Lost update, Write skew, and Phantom reads.",
      "Techniques for Implementing Serializability: Two-Phase Locking (2PL), Serializable Snapshot Isolation (SSI), and Actual Serial Execution or Single-Threaded approaches.",
    ],
    mainTakeaways: [
      "Transactions are a powerful abstraction for simplifying concurrency in applications.",
      "The strongest guarantees (serializable) can have performance costs, so many systems default to slightly weaker isolation.",
      "Achieving ACID across nodes is hard (2PC and possible blocking).",
      "Many NoSQL systems chose to forgo distributed transactions to gain scalability, but this means developers have to handle cross-partition consistency manually.",
    ],
    notableTerms: [
      "ACID",
      "Isolation levels",
      "Two-phase locking",
      "MVCC",
      "Serializability",
      "Deadlocks",
      "Write skew",
    ],
    examples: ["Bank account transfers", "Ticket booking system", "Inventory management"],
    prerequisites: [
      "Understanding of concurrency",
      "Basic database knowledge",
      "Familiarity with ACID",
    ],
    difficulty: "Advanced",
    readingTime: "3-4 hours",
    keyDiagrams: [
      "Transaction state diagram",
      "Isolation level comparison",
      "Concurrency control mechanisms",
      "Distributed transaction flow",
    ],
    realWorldApplications: [
      "Financial systems",
      "E-commerce platforms",
      "Inventory management",
      "Booking systems",
    ],
    commonPitfalls: ["Deadlocks", "Lost updates", "Dirty reads", "Poor isolation level choice"],
    bestPractices: [
      "Choose appropriate isolation level",
      "Keep transactions short",
      "Handle deadlocks gracefully",
      "Monitor transaction performance",
    ],
  },
  {
    id: 8,
    title: "The Trouble with Distributed Systems",
    theme:
      "An eye-opening tour of the numerous ways distributed systems can fail or behave unexpectedly. This chapter is a cautionary discussion of the inherent challenges when you have a system spread across multiple machines: unreliable networks, clock skew, process pause (e.g. GC), partial failures, etc. It sets the stage for why achieving the guarantees we want (like consistency and reliability) is so hard in distributed environments.",
    keyConcepts: [
      "Partial Failures: Unlike a single machine, in a distributed system components can fail independently. One node might crash or be slow, but others are fine.",
      "Unreliable Networks: Networks can drop messages, deliver them out of order, duplicate them, or arbitrarily delay them.",
      "Unreliable Clocks: Each machine has its own clock and they are never perfectly synchronized. Even with NTP, clocks can drift by milliseconds or more.",
      "Process Pauses and GC: In a distributed system, any node might halt unpredictably (e.g., stop-the-world garbage collection pauses a Java process for seconds).",
      "Consensus is Hard: It's hinted that reaching agreement in distributed systems is fundamentally tricky due to the above issues.",
    ],
    mainTakeaways: [
      "Distributed systems amplify the potential for things to go wrong. We must design with defensive principles.",
      "There's no perfect solution to these issues – only mitigations.",
      "Humans often are the biggest source of failure (misconfiguration, deployment errors causing outages).",
      "Understanding these fundamental challenges is necessary when building or using distributed data systems.",
    ],
    notableTerms: [
      "Network partition",
      "Clock drift",
      "Stop-the-world GC",
      "Fencing token",
      "Byzantine failures",
      "FLP impossibility",
      "Two Generals' Problem",
    ],
    examples: [
      "Network partition scenarios",
      "Clock synchronization issues",
      "GC-induced pauses in distributed systems",
    ],
    prerequisites: [
      "Understanding of networking",
      "Basic distributed systems knowledge",
      "Familiarity with system clocks",
    ],
    difficulty: "Advanced",
    readingTime: "3-4 hours",
    keyDiagrams: [
      "Network partition scenarios",
      "Clock synchronization mechanisms",
      "Process pause impacts",
      "Failure detection flows",
    ],
    realWorldApplications: [
      "Distributed databases",
      "Cloud services",
      "Microservices architectures",
      "Global applications",
    ],
    commonPitfalls: [
      "Assuming perfect networks",
      "Ignoring clock drift",
      "Not handling partitions",
      "Poor failure detection",
    ],
    bestPractices: [
      "Design for partial failures",
      "Use appropriate timeouts",
      "Implement proper fencing",
      "Monitor system health",
    ],
  },
  {
    id: 9,
    title: "Consistency and Consensus",
    theme:
      "This chapter tackles the algorithms and concepts that allow a distributed system to agree on data or an order of operations, which is crucial for achieving strong consistency. It covers consistency models like linearizability and causal consistency, and explains consensus algorithms and primitives (like Total Order Broadcast, Paxos/Raft by implication, etc.) that underpin fault-tolerant agreement in distributed databases.",
    keyConcepts: [
      "Consistency Models: The strongest model discussed is Linearizability (also known as atomic or strong consistency) – which means every operation behaves as if it occurred instantaneously at some point between its invocation and completion.",
      "Causal Consistency: A slightly weaker model is causal consistency, which ensures that if one operation causally affects another, then everyone must see A before B.",
      "Total Order Broadcast (Atomic Broadcast): This is introduced as a communication primitive equivalent to consensus.",
      "Consensus and Algorithms: The chapter explains that certain problems like linearizable compare-and-swap register or atomic transaction commit are equivalent to consensus.",
    ],
    mainTakeaways: [
      "Strong consistency (linearizability/serializability) in a distributed system comes at a cost – usually needing consensus.",
      "It's highlighted that many practical systems provide a linearizable core which larger distributed systems then rely on.",
      "The chapter also reinforces the difference between safety and liveness: consensus algorithms ensure no two nodes decide differently (safety) but under extreme conditions they might halt progress (liveness sacrificed to maintain safety).",
      "In essence, if you need absolute ordering (like a transaction log or a unique sequence generator), you will likely use a consensus-based approach, accepting the overhead.",
    ],
    notableTerms: [
      "Linearizability",
      "Causal consistency",
      "Total order broadcast",
      "Paxos/Raft",
      "ZAB",
      "Quorum",
      "Leader election",
    ],
    examples: [
      "Distributed lock service",
      "Leader election in a cluster",
      "Consensus in distributed databases",
    ],
    prerequisites: [
      "Understanding of distributed systems",
      "Basic algorithm knowledge",
      "Familiarity with consistency models",
    ],
    difficulty: "Advanced",
    readingTime: "4-5 hours",
    keyDiagrams: [
      "Consistency model hierarchy",
      "Consensus algorithm flows",
      "Leader election process",
      "Quorum operations",
    ],
    realWorldApplications: [
      "Distributed databases",
      "Configuration management",
      "Service discovery",
      "Distributed locking",
    ],
    commonPitfalls: [
      "Poor consistency model choice",
      "Ignoring liveness properties",
      "Complex consensus implementations",
      "Network partition handling",
    ],
    bestPractices: [
      "Choose appropriate consistency model",
      "Use proven consensus algorithms",
      "Monitor consensus performance",
      "Handle leader failures gracefully",
    ],
  },
  {
    id: 11,
    title: "Stream Processing",
    theme:
      "Complementing batch, this chapter focuses on stream processing – processing data continuously as it arrives, for low-latency insights. It covers message passing systems, event streams, and techniques for handling unbounded data in real time (or near-real time), including topics like message brokers, event time vs processing time, windowing, and fault tolerance in stream jobs.",
    keyConcepts: [
      "Differences from Batch: Stream processing deals with unbounded data (potentially infinite streams of events), as opposed to fixed-size batch inputs.",
      "Messaging Systems: The chapter outlines how data is delivered in streams: Direct peer-to-peer messaging, Message Queues/Brokers, and Log-based brokers.",
      "Time and Order in Streams: A big challenge is that events can arrive out of order or late. The chapter differentiates event time vs processing time.",
      "Windowing: Because streams are infinite, to compute aggregates you define windows (time bounds) – e.g. count events per minute, or a sliding 1-hour window updated every 5 minutes.",
    ],
    mainTakeaways: [
      "Streaming systems complement batch by handling data that never stops coming.",
      "Designing streaming pipelines requires thinking about time progression and incomplete data.",
      "There are inherent trade-offs in correctness vs latency: waiting longer yields more complete data but increases output latency.",
      "Integrating streams with existing systems calls for patterns like CDC or event sourcing to avoid consistency problems.",
    ],
    notableTerms: [
      "Event time",
      "Watermarks",
      "Windowing",
      "Exactly-once processing",
      "Backpressure",
      "Stream-table duality",
      "CEP (Complex Event Processing)",
    ],
    examples: [
      "Real-time metrics computation",
      "Streaming joins",
      "Fraud detection system",
      "Real-time recommendations",
    ],
    prerequisites: [
      "Understanding of distributed systems",
      "Knowledge of message queues",
      "Familiarity with event-driven architectures",
    ],
    difficulty: "Advanced",
    readingTime: "4-5 hours",
    keyDiagrams: [
      "Stream processing architecture",
      "Event time vs processing time",
      "Windowing strategies",
      "State management patterns",
    ],
    realWorldApplications: [
      "Real-time analytics",
      "Monitoring systems",
      "IoT data processing",
      "Financial trading systems",
    ],
    commonPitfalls: [
      "Late event handling",
      "State management complexity",
      "Resource management",
      "Processing guarantees",
    ],
    bestPractices: [
      "Design for out-of-order events",
      "Implement proper backpressure",
      "Monitor streaming metrics",
      "Plan for state recovery",
    ],
  },
];

const mhChapters: Chapter[] = [
  {
    id: 1,
    title: "Reliable, Scalable, and Maintainable Monster Hunter Guilds",
    theme:
      "How to build a Monster Hunter Guild that can handle massive quests, rare monster events, and evolving hunter teams. Focuses on reliability (no failed hunts!), scalability (handling Elder Dragon invasions), and maintainability (keeping the guild hall running and hunters happy).",
    keyConcepts: [
      "Reliability – Ensuring the guild can recover from failed hunts, monster rampages, or missing supplies.",
      "Scalability – Expanding the guild to handle more hunters and bigger monsters, from Great Jagras to Fatalis.",
      "Maintainability – Keeping the guild hall, equipment, and hunter knowledge up to date for new generations of hunters.",
      "Combining Tools – Using Palicoes, Handler support, and item pouches to create a seamless hunting experience.",
    ],
    mainTakeaways: [
      "A successful guild is built on preparation, teamwork, and adaptability.",
      "Always expect the unexpected: monsters may break through defenses or hunters may faint.",
      "Growth means recruiting new hunters and upgrading facilities.",
      "Keep your gear sharp and your strategies sharper!",
    ],
    notableTerms: ["Hunter Rank", "Elder Dragon", "Palico Support", "Guild Hall Upgrades"],
    examples: [
      "Coordinating a multi-hunter raid on a rampaging Deviljho",
      "Upgrading the canteen for better buffs",
      "Disaster recovery after a failed hunt",
    ],
    prerequisites: ["Basic knowledge of monster hunting", "Familiarity with guild operations"],
    difficulty: "Beginner",
    readingTime: "1-2 hunts",
    keyDiagrams: ["Guild hall layout", "Hunter supply chain"],
    realWorldApplications: ["Monster Hunter World", "Monster Hunter Rise"],
    commonPitfalls: ["Forgetting to eat before a hunt", "Underestimating monster aggression"],
    bestPractices: ["Always bring a Farcaster", "Upgrade your armor regularly"],
  },
  {
    id: 2,
    title: "Monster Data Models and Hunter Query Languages",
    theme:
      "How to catalog monsters, their weaknesses, and loot tables. Compares the classic Hunter's Notes (relational model) with new research logs (document model) and monster family trees (graph model).",
    keyConcepts: [
      "Hunter's Notes – Tables of monster stats, weaknesses, and habitats.",
      "Research Logs – Flexible entries for new monsters and variant subspecies.",
      "Monster Family Trees – Graphs showing monster relationships and evolution.",
      "Quest Board Queries – Finding the right hunt using filters and search.",
    ],
    mainTakeaways: [
      "Choose the right data model for the hunt: tables for stats, documents for lore, graphs for monster lineages.",
      "Efficient queries mean less time searching, more time hunting!",
    ],
    notableTerms: ["Hunter's Notes", "Research Points", "Monster Weaknesses"],
    examples: [
      "Looking up Rathalos weaknesses before a hunt",
      "Adding a new monster to the research log",
    ],
    prerequisites: ["Basic monster knowledge"],
    difficulty: "Intermediate",
    readingTime: "1 hunt",
    keyDiagrams: ["Monster family tree", "Hunter's Notes page"],
    realWorldApplications: ["Monster Hunter Generations", "Monster Hunter Stories"],
    commonPitfalls: ["Bringing the wrong weapon for a monster's weakness"],
    bestPractices: ["Update your notes after every hunt"],
  },
  {
    id: 3,
    title: "Storage and Retrieval in the Item Box",
    theme:
      "How the item box and supply chest keep your potions, traps, and monster parts organized. Compares pouch management (log-structured) with item box sorting (B-Tree), and how to quickly retrieve the right item mid-hunt.",
    keyConcepts: [
      "Log-Structured Storage – Tossing items into your pouch as you gather them.",
      "B-Tree Sorting – Organizing your item box for fast access to rare materials.",
      "Columnar Storage – Keeping monster parts sorted by type for crafting.",
      "OLTP vs OLAP – Quick access during hunts vs. deep dives for crafting marathons.",
    ],
    mainTakeaways: [
      "Efficient storage means less time searching, more time hunting.",
      "Organize your item box to avoid mid-hunt panic.",
      "Different storage strategies for gathering vs. crafting.",
    ],
    notableTerms: ["Item Box", "Pouch", "Sorting", "Crafting Materials"],
    examples: ["Finding a Max Potion in a full pouch", "Sorting monster parts for armor sets"],
    prerequisites: ["Basic inventory management"],
    difficulty: "Advanced",
    readingTime: "2 hunts",
    keyDiagrams: ["Item box organization chart"],
    realWorldApplications: ["Monster Hunter 4U", "Monster Hunter Rise"],
    commonPitfalls: ["Running out of space mid-hunt"],
    bestPractices: ["Sort after every hunt"],
  },
  {
    id: 4,
    title: "Encoding and Evolution of Hunter Tools",
    theme:
      "How hunter gadgets and gear evolve over time. Discusses how to upgrade and modify weapons, and how to keep compatibility with old monster parts and new upgrades.",
    keyConcepts: [
      "Encoding Formats – Weapon trees and upgrade paths.",
      "Schema Evolution – Adapting old gear for new monsters.",
      "API Evolution – Handler calls for new quest types.",
      "Versioning – Keeping your Palico gadgets up to date.",
    ],
    mainTakeaways: [
      "Upgrade paths are key to staying relevant in the New World.",
      "Always check compatibility before fusing monster parts.",
      "Keep your Handler informed of new quest types.",
    ],
    notableTerms: ["Weapon Tree", "Upgrade Path", "Palico Gadget"],
    examples: [
      "Upgrading a Bone Sword to a Nergigante weapon",
      "Adding a new gadget to your Palico",
    ],
    prerequisites: ["Basic crafting knowledge"],
    difficulty: "Intermediate",
    readingTime: "1 hunt",
    keyDiagrams: ["Weapon upgrade tree"],
    realWorldApplications: ["Monster Hunter World", "Monster Hunter Generations"],
    commonPitfalls: ["Upgrading the wrong branch"],
    bestPractices: ["Plan your upgrades ahead"],
  },
  {
    id: 5,
    title: "Replication: Palico Backup and Felyne Teams",
    theme:
      "How to ensure your hunts never fail by bringing backup Palicoes and forming Felyne teams. Discusses leader-based (main hunter), multi-leader (co-op), and leaderless (Palico-only) strategies for success.",
    keyConcepts: [
      "Leader-Based Replication – Main hunter leads, Palicoes follow.",
      "Multi-Leader – Co-op hunts with multiple hunters and their Palicoes.",
      "Leaderless – Palico-only expeditions.",
      "Consistency – Making sure everyone gets their share of loot.",
    ],
    mainTakeaways: [
      "Backup is essential for tough hunts.",
      "Co-op brings new strategies and more loot.",
      "Palico teams can handle gathering while you focus on the monster.",
    ],
    notableTerms: ["Palico Squad", "Co-op Hunt", "Loot Sharing"],
    examples: ["Palico revives a fainted hunter", "Co-op team splits up to gather tracks"],
    prerequisites: ["Basic Palico training"],
    difficulty: "Advanced",
    readingTime: "2 hunts",
    keyDiagrams: ["Palico squad formation"],
    realWorldApplications: ["Monster Hunter World", "Monster Hunter Stories"],
    commonPitfalls: ["Not sharing loot fairly"],
    bestPractices: ["Coordinate with your team"],
  },
  {
    id: 6,
    title: "Partitioning: Dividing the Hunting Grounds",
    theme:
      "How to split up the map for efficient monster tracking and gathering. Covers sharding the Ancient Forest, assigning zones, and rebalancing when monsters migrate.",
    keyConcepts: [
      "Zone Partitioning – Assigning hunters to different map areas.",
      "Hashing – Randomly assigning gathering points.",
      "Rebalancing – Moving hunters when monsters change zones.",
      "Hot Spots – Dealing with monster turf wars.",
    ],
    mainTakeaways: [
      "Divide and conquer for efficient hunts.",
      "Rebalance when monsters migrate or new threats appear.",
      "Avoid hot spots unless you're ready for a turf war.",
    ],
    notableTerms: ["Zone Assignment", "Turf War", "Gathering Point"],
    examples: ["Splitting up to find tracks faster", "Rebalancing when a monster flees"],
    prerequisites: ["Map knowledge"],
    difficulty: "Advanced",
    readingTime: "2 hunts",
    keyDiagrams: ["Zone map"],
    realWorldApplications: ["Monster Hunter World", "Monster Hunter Rise"],
    commonPitfalls: ["Everyone chasing the same monster"],
    bestPractices: ["Assign zones before the hunt"],
  },
  {
    id: 7,
    title: "Transactions: The Art of Trading and Crafting",
    theme:
      "How to ensure fair trades and successful crafting. Explains the rules of trading, crafting multiple items at once, and making sure no materials are lost in the process.",
    keyConcepts: [
      "Atomic Trades – All or nothing trades with the Argosy.",
      "Consistency – Ensuring the right materials are used.",
      "Isolation – No one else can take your loot while crafting.",
      "Durability – Crafted gear stays with you, even after a faint.",
    ],
    mainTakeaways: [
      "Always double-check your trade before confirming.",
      "Crafting is safest at the Smithy, not in the field.",
      "Durable gear means more successful hunts.",
    ],
    notableTerms: ["Argosy", "Smithy", "Trade Confirmation"],
    examples: ["Trading monster parts for rare items", "Crafting a full armor set"],
    prerequisites: ["Basic trading knowledge"],
    difficulty: "Advanced",
    readingTime: "1 hunt",
    keyDiagrams: ["Trade flowchart"],
    realWorldApplications: ["Monster Hunter World", "Monster Hunter 3U"],
    commonPitfalls: ["Losing materials in a bad trade"],
    bestPractices: ["Trade with trusted partners"],
  },
  {
    id: 8,
    title: "The Trouble with Monster Ecosystems",
    theme:
      "A look at the chaos of the New World: unpredictable monster behavior, weather changes, and Palico mishaps. Why hunting is never as simple as it seems.",
    keyConcepts: [
      "Partial Failures – Monsters fleeing or interrupting each other.",
      "Unreliable Networks – Scoutflies losing the trail.",
      "Unreliable Clocks – Day/night cycles and weather changes.",
      "Process Pauses – Waiting for the Handler to finish talking.",
    ],
    mainTakeaways: [
      "Expect the unexpected in every hunt.",
      "Scoutflies are helpful, but always watch for new events.",
      "Always have a backup plan for monster migrations.",
    ],
    notableTerms: ["Scoutflies", "Monster Migration", "Weather Effects"],
    examples: ["Losing a monster's trail in a sandstorm", "Handler delays at the canteen"],
    prerequisites: ["Experience with unpredictable hunts"],
    difficulty: "Advanced",
    readingTime: "1 hunt",
    keyDiagrams: ["Monster migration map"],
    realWorldApplications: ["Monster Hunter World", "Monster Hunter Stories 2"],
    commonPitfalls: ["Relying too much on Scoutflies"],
    bestPractices: ["Scout ahead and plan for delays"],
  },
  {
    id: 9,
    title: "Consistency and Consensus: Deciding the Next Hunt",
    theme:
      "How the guild decides which monster to hunt next. Covers voting, consensus, and making sure everyone agrees before heading out.",
    keyConcepts: [
      "Voting – Picking the next quest as a team.",
      "Consensus – Ensuring all hunters are ready.",
      "Leader Election – Who posts the quest.",
      "Quorum – Enough hunters to start the hunt.",
    ],
    mainTakeaways: [
      "Consensus avoids confusion and failed hunts.",
      "Always check that everyone is ready before departing.",
      "Leader election is key for smooth quest posting.",
    ],
    notableTerms: ["Quest Board", "Ready Check", "Squad Leader"],
    examples: ["Voting on which Elder Dragon to hunt", "Leader posts the quest, everyone joins"],
    prerequisites: ["Team hunting experience"],
    difficulty: "Advanced",
    readingTime: "1 hunt",
    keyDiagrams: ["Quest board flow"],
    realWorldApplications: ["Monster Hunter World", "Monster Hunter Rise"],
    commonPitfalls: ["Starting a hunt before everyone is ready"],
    bestPractices: ["Always do a ready check"],
  },
  {
    id: 10,
    title: "Batch Processing: Gathering Expeditions and Resource Runs",
    theme:
      "How to efficiently gather resources in bulk. Explains the principles of gathering expeditions, mining runs, and how to process large amounts of loot at once.",
    keyConcepts: [
      "Batch Gathering – Mining and gathering in groups.",
      "Resource Pipelines – Sending materials to the Smithy.",
      "Workflow Managers – Handler organizing multiple expeditions.",
      "Recomputability – Revisiting old areas for new resources.",
    ],
    mainTakeaways: [
      "Batch runs save time and effort.",
      "Efficient pipelines mean faster upgrades.",
      "Always check for rare spawns during expeditions.",
    ],
    notableTerms: ["Expedition", "Resource Pipeline", "Rare Spawn"],
    examples: ["Organizing a mining run with friends", "Sending all loot to the Smithy at once"],
    prerequisites: ["Basic gathering knowledge"],
    difficulty: "Intermediate",
    readingTime: "1 hunt",
    keyDiagrams: ["Resource pipeline diagram"],
    realWorldApplications: ["Monster Hunter World", "Monster Hunter Stories"],
    commonPitfalls: ["Forgetting to empty your pouch before a run"],
    bestPractices: ["Plan your route before starting"],
  },
  {
    id: 11,
    title: "Stream Processing: Real-Time Monster Tracking",
    theme:
      "How to track monsters in real time as they move across the map. Covers Scoutflies, event alerts, and handling unbounded monster movement.",
    keyConcepts: [
      "Event Streams – Real-time monster movement alerts.",
      "Windowing – Tracking monster activity over time.",
      "Backpressure – Too many monsters at once.",
      "State Management – Remembering monster locations.",
    ],
    mainTakeaways: [
      "Real-time tracking means faster hunts.",
      "Scoutflies help, but always watch for new events.",
      "Manage your attention to avoid missing rare monsters.",
    ],
    notableTerms: ["Scoutflies", "Event Alert", "Monster Window"],
    examples: [
      "Tracking a Bazelgeuse as it bombards the map",
      "Catching a rare monster spawn in real time",
    ],
    prerequisites: ["Experience with real-time hunts"],
    difficulty: "Advanced",
    readingTime: "1 hunt",
    keyDiagrams: ["Monster tracking timeline"],
    realWorldApplications: ["Monster Hunter World", "Monster Hunter Rise"],
    commonPitfalls: ["Missing event alerts"],
    bestPractices: ["Keep an eye on the minimap"],
  },
  {
    id: 12,
    title: "The Future of Monster Hunting Guilds",
    theme:
      "A look at the next generation of guilds: new lands, new monsters, and new technologies. How the guild will evolve to face even greater threats.",
    keyConcepts: [
      "Emerging Threats – New monsters and unknown lands.",
      "Guild Upgrades – Better facilities and tools.",
      "Hunter Collaboration – Cross-guild teamwork.",
      "Ethical Hunting – Balancing the ecosystem.",
    ],
    mainTakeaways: [
      "The future is full of new challenges and opportunities.",
      "Upgrade your guild to stay ahead.",
      "Work together for the good of all hunters.",
    ],
    notableTerms: ["New World", "Guild Upgrade", "Elder Crossing"],
    examples: [
      "Exploring a new region with your guild",
      "Collaborating with other guilds on a massive hunt",
    ],
    prerequisites: ["Curiosity and courage"],
    difficulty: "Intermediate",
    readingTime: "1 hunt",
    keyDiagrams: ["Guild evolution chart"],
    realWorldApplications: ["Monster Hunter World", "Monster Hunter Rise"],
    commonPitfalls: ["Ignoring new threats"],
    bestPractices: ["Stay adaptable and keep learning"],
  },
];

const SystemsDesign: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [showDetailedView, setShowDetailedView] = useState(false);
  const [monsterHunterMode, setMonsterHunterMode] = useState(false);
  const { theme } = useTheme();
  const isDarkTheme = [
    "dracula",
    "nord",
    "snes",
    "ps2",
    "re2",
    "kingdom-hearts",
    "fornite",
  ].includes(theme);

  return (
    <div
      className={cn(
        "min-h-screen py-12 px-4 sm:px-8 transition-colors duration-500",
        isDarkTheme ? "bg-background" : "bg-background"
      )}
    >
      <div className="text-xs text-muted-foreground italic mb-4">
        Portions of this content are adapted from Martin Kleppmann's "Designing Data-Intensive
        Applications" and other sources. See footnotes for details.
      </div>
      {monsterHunterMode && (
        <div className="text-xs text-muted-foreground italic mb-4">
          This project is an unofficial fan work inspired by Capcom's Monster Hunter series. All
          Monster Hunter names, terms, and concepts are the property of Capcom. This project is not
          affiliated with or endorsed by Capcom, and no original Monster Hunter assets are used.
        </div>
      )}
      <div className="flex justify-end max-w-7xl mx-auto mb-8">
        <Switch.Group>
          <div className="flex items-center gap-5">
            <Switch.Label
              className={cn(
                "font-semibold text-base select-none transition-colors duration-200 cursor-pointer",
                isDarkTheme ? "text-foreground" : "text-foreground",
                "hover:text-primary/80"
              )}
            >
              Hunter Mode
            </Switch.Label>
            <span className="text-xs text-muted-foreground italic ml-2">
              Unofficial fan content. Not affiliated with Capcom.
            </span>
            <Switch
              checked={monsterHunterMode}
              onChange={setMonsterHunterMode}
              aria-label="Toggle Monster Hunter Mode"
              className={cn(
                "relative inline-flex h-7 w-14 items-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background overflow-hidden",
                "hover:shadow-md active:scale-95",
                monsterHunterMode ? "bg-primary shadow-lg shadow-primary/20" : "bg-muted shadow-sm",
                "border border-border/50"
              )}
            >
              <span
                className={cn(
                  "inline-block h-5 w-5 transform rounded-full transition-all duration-300 ease-in-out flex items-center justify-center",
                  monsterHunterMode
                    ? "translate-x-[1.75rem] scale-110 bg-white"
                    : "translate-x-1 bg-white",
                  "absolute left-0 top-1/2 -translate-y-1/2",
                  "shadow-md"
                )}
              >
                {monsterHunterMode && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="flex items-center justify-center"
                  >
                    <PawPrint className="w-3 h-3 text-primary" aria-hidden="true" />
                  </motion.div>
                )}
              </span>
            </Switch>
          </div>
        </Switch.Group>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              "text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent leading-[1.15] pb-2",
              "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]"
            )}
          >
            Designing Data-Intensive Applications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={cn("text-base sm:text-lg max-w-2xl mx-auto px-4", "text-muted-foreground")}
          >
            A comprehensive guide to building reliable, scalable, and maintainable systems
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(monsterHunterMode ? mhChapters : chapters).map((chapter) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0 10px 30px -10px var(--shadow-color)",
              }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "rounded-xl p-6 cursor-pointer transition-all duration-200 group",
                "hover:shadow-lg backdrop-blur-sm",
                "bg-card hover:bg-card/90 border border-border",
                "shadow-[0_0_15px_var(--shadow-color)]",
                "relative overflow-hidden",
                "before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-black/5 before:opacity-0 before:transition-opacity before:duration-200",
                "hover:before:opacity-100"
              )}
              onClick={() => {
                setSelectedChapter(chapter);
                setShowDetailedView(true);
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-2">
                  <h2
                    className={cn(
                      "text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors duration-200",
                      "text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]"
                    )}
                  >
                    {chapter.title}
                  </h2>
                  <span
                    className={cn(
                      "text-xs sm:text-sm px-3 py-1 rounded-full font-bold inline-block border shadow-sm transition-colors duration-200",
                      chapter.difficulty === "Beginner"
                        ? "bg-green-500/10 text-green-500 border-green-500/20"
                        : chapter.difficulty === "Intermediate"
                          ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                          : "bg-red-500/10 text-red-500 border-red-500/20"
                    )}
                  >
                    {chapter.difficulty}
                  </span>
                </div>
                <ChevronRight
                  className={cn(
                    "w-5 h-5 transition-transform duration-200 group-hover:translate-x-1",
                    "text-muted-foreground group-hover:text-primary"
                  )}
                />
              </div>

              <p className={cn("text-sm mb-4 line-clamp-2", "text-muted-foreground")}>
                {chapter.theme}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {chapter.notableTerms.slice(0, 3).map((term, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium transition-colors duration-200",
                      "bg-muted/50 text-muted-foreground hover:bg-muted/80",
                      "border border-border/50"
                    )}
                  >
                    {term}
                  </motion.span>
                ))}
                {chapter.notableTerms.length > 3 && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium transition-colors duration-200",
                      "bg-muted/50 text-muted-foreground hover:bg-muted/80",
                      "border border-border/50"
                    )}
                  >
                    +{chapter.notableTerms.length - 3} more
                  </motion.span>
                )}
              </div>

              <div
                className={cn(
                  "flex items-center gap-4 text-xs sm:text-sm",
                  "text-muted-foreground"
                )}
              >
                <div className="flex items-center gap-1">
                  <Clock className={cn("w-4 h-4", "text-primary")} />
                  <span>{chapter.readingTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className={cn("w-4 h-4", "text-primary")} />
                  <span>{chapter.prerequisites.length} prerequisites</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {showDetailedView && selectedChapter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setShowDetailedView(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={cn(
                "rounded-2xl p-6 sm:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto",
                "shadow-2xl border backdrop-blur-sm",
                "bg-card border-border"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className={cn("w-6 h-6", "text-primary")} />
                    <h2
                      className={cn(
                        "text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent",
                        "text-card-foreground"
                      )}
                    >
                      {selectedChapter.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={cn(
                        "text-xs sm:text-sm px-3 py-1 rounded-full font-bold border shadow-sm transition-colors duration-200",
                        selectedChapter.difficulty === "Beginner"
                          ? "bg-green-500 text-white border-green-600"
                          : selectedChapter.difficulty === "Intermediate"
                            ? "bg-yellow-500 text-white border-yellow-600"
                            : "bg-red-500 text-white border-red-600"
                      )}
                    >
                      {selectedChapter.difficulty}
                    </span>
                    <span
                      className={cn(
                        "text-xs sm:text-sm flex items-center gap-1",
                        "text-muted-foreground"
                      )}
                    >
                      <Clock className="w-4 h-4" />
                      {selectedChapter.readingTime}
                    </span>
                  </div>
                </div>
                <button
                  className={cn(
                    "p-2 rounded-full hover:bg-opacity-10 transition-colors",
                    "text-muted-foreground hover:bg-foreground"
                  )}
                  onClick={() => setShowDetailedView(false)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-8">
                {Object.entries({
                  Theme: selectedChapter.theme,
                  Prerequisites: selectedChapter.prerequisites,
                  "Key Concepts": selectedChapter.keyConcepts,
                  "Main Takeaways": selectedChapter.mainTakeaways,
                  "Notable Terms": selectedChapter.notableTerms,
                  Examples: selectedChapter.examples,
                  "Key Diagrams": selectedChapter.keyDiagrams,
                  "Real World Applications": selectedChapter.realWorldApplications,
                  "Common Pitfalls": selectedChapter.commonPitfalls,
                  "Best Practices": selectedChapter.bestPractices,
                }).map(([title, content]) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <h3
                      className={cn(
                        "text-lg sm:text-xl font-semibold tracking-tight flex items-center gap-2",
                        "text-card-foreground"
                      )}
                    >
                      {title}
                    </h3>
                    {Array.isArray(content) ? (
                      title === "Notable Terms" ? (
                        <div className="flex flex-wrap gap-2">
                          {content.map((item, index) => (
                            <motion.span
                              key={index}
                              whileHover={{ scale: 1.05 }}
                              className={cn(
                                "px-3 py-1.5 rounded-full text-sm font-medium",
                                "transition-transform",
                                "text-muted-foreground"
                              )}
                            >
                              {item}
                            </motion.span>
                          ))}
                        </div>
                      ) : (
                        <ul className="space-y-3">
                          {content.map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className={cn(
                                "flex items-start gap-3 group",
                                "text-muted-foreground"
                              )}
                            >
                              <span
                                className={cn(
                                  "mt-1.5 h-1.5 w-1.5 rounded-full shrink-0",
                                  "transition-colors duration-200",
                                  "text-primary group-hover:bg-primary/80"
                                )}
                              />
                              <span className="group-hover:translate-x-1 transition-transform duration-200">
                                {item}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      )
                    ) : (
                      <p
                        className={cn(
                          "leading-relaxed text-sm sm:text-base",
                          "text-muted-foreground"
                        )}
                      >
                        {content}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-8 text-xs text-muted-foreground">
        <div className="font-semibold mb-2">Footnotes & Sources:</div>
        <div className="italic mb-1">
          Martin Kleppmann, <i>Designing Data-Intensive Applications</i>, O'Reilly Media, 2017.
        </div>
        <div className="italic mb-1">
          <a
            href="https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition-colors"
          >
            Buy the book from O'Reilly
          </a>
        </div>
        <div className="italic mb-1">
          <a
            href="https://www.monsterhunter.com/wilds/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition-colors"
          >
            Buy Monster Hunter Wilds (official site)
          </a>
        </div>
        <div className="italic">Additional explanations and analogies by AlgoTrainer team.</div>
      </div>
    </div>
  );
};

export default SystemsDesign;
