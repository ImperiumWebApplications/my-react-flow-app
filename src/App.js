import React, { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    type: "input",
    position: { x: 0, y: 0 },
    data: { label: "Node 1" },
  },
  { id: "2", position: { x: 100, y: 100 }, data: { label: "Node 2" } },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2", animated: true }];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default App;
