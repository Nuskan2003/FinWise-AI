import { Wallet } from "lucide-react";

type LogoProps = {
  dark?: boolean;
};

export default function Logo({ dark = false }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-xl bg-emerald-500 p-2 text-white shadow-md">
        <Wallet className="h-5 w-5" />
      </div>

      <div className="leading-none">
        <h1
          className={`text-xl font-bold ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          FinWise AI
        </h1>

        <p
          className={`text-xs ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Smart Finance Tracker
        </p>
      </div>
    </div>
  );
}