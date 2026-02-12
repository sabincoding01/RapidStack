import React from "react";
import { useState } from "react";

export default function WaterTracker() {
  const [logs, setLogs] = useState([]);
  const [customAmount, setCustomAmount] = useState("");
  const [dailyGoal, setDailyGoal] = useState(2000);
  const [total, setTotal] = useState(0);

  const addEntry = (amount) => {
    if (!amount) return;
    const newTotal = total + amount;
    setTotal(newTotal);
    setLogs([...logs, { amount, time: new Date().toLocaleTimeString() }]);
  };

  const deleteEntry = (idx) => {
    const deletedAmount = logs[idx].amount;
    setTotal((prev) => Math.max(prev - deletedAmount, 0));
    setLogs((prev) => prev.filter((_, i) => i !== idx));
  };

  const progress = Math.min((total / dailyGoal) * 100, 100);

  return (
    <div className="flex gap-6 p-6 bg-green-50 min-h-screen">
      {/* Left side */}
      <div className="w-1/2 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">🌿 Today's Progress</h2>
        <div className="flex flex-col items-center mb-6">
          <div
            className="w-32 h-32 rounded-full border-4 flex items-center justify-center text-lg font-bold"
            style={{ borderColor: "#238b45", color: "#238b45" }}
          >
            {Math.round(progress)}%
          </div>
          <p className="mt-2" style={{ color: "#238b45" }}>
            💧 {total} ml of {dailyGoal} ml
          </p>
        </div>

        {/* Quick Add */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[250, 500, 750, 1000].map((amt) => (
            <button
              key={amt}
              onClick={() => addEntry(amt)}
              className="text-white py-2 rounded hover:opacity-90"
              style={{ backgroundColor: "#238b45" }}
            >
              +{amt} ml
            </button>
          ))}
        </div>

        {/* Custom input */}
        <div className="space-y-3">
          <input
            type="number"
            placeholder="Custom Amount (ml)"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:ring-2"
            style={{ borderColor: "#238b45" }}
          />
          <input
            type="number"
            placeholder="Daily Goal (ml)"
            value={dailyGoal}
            onChange={(e) => setDailyGoal(Number(e.target.value))}
            className="w-full border rounded px-3 py-2 focus:ring-2"
            style={{ borderColor: "#238b45" }}
          />
          <button
            onClick={() => {
              addEntry(Number(customAmount));
              setCustomAmount("");
            }}
            className="w-full text-white py-2 rounded hover:opacity-90"
            style={{ backgroundColor: "#238b45" }}
          >
            ➕ Add Entry
          </button>
        </div>
      </div>

      {/* Right side: Logs */}
      <div className="w-1/2 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">📜 Recent Logs</h2>
        {logs.length === 0 ? (
          <p className="text-gray-500">
            No logs yet. Start tracking your water intake 💧!
          </p>
        ) : (
          <ul className="space-y-2">
            {logs.map((log, idx) => (
              <li
                key={idx}
                className="border-b pb-2 flex items-center justify-between"
                style={{ color: "#238b45" }}
              >
                <span>
                  <span className="font-semibold">💧 {log.amount} ml</span> –{" "}
                  {log.time}
                </span>
                <button
                  onClick={() => deleteEntry(idx)}
                  className="ml-4 text-red-500 hover:text-red-700 font-bold text-sm px-2 py-1 rounded hover:bg-red-50 transition-colors"
                  title="Delete entry"
                >
                  🗑️ Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}