import { ideasText, type IdeaStatus } from "@/content/en/ideas";

export function StatusTag({ status }: { status: IdeaStatus }) {
  return (
    <span className="inline-block rounded-full border border-rule bg-paper-2 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-muted">
      {ideasText.status[status]}
    </span>
  );
}
