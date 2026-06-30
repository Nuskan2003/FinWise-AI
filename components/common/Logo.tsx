import { Wallet } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-xl bg-emerald-500 p-2 text-white shadow-md">
        <Wallet className="h-5 w-5" />
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold text-slate-900">
          FinWise AI
        </span>

        <span className="text-xs text-slate-500">
          Smart Finance Tracker
        </span>
      </div>
    </div>
  );
}