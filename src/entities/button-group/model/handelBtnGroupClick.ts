import { MouseEvent } from "react";

export function handleBtnGroupClick(
  e: MouseEvent,
  setSearchParams: (searchParams: any) => void,
  kind: string
) {
  const target = e.target as HTMLElement;
  const taskBtn = target.closest("button");

  if (!taskBtn || !taskBtn.dataset?.value) return;

  e.preventDefault();
  const value = taskBtn.dataset?.value;

  setSearchParams((searchParams: URLSearchParams) => {
    searchParams.set(kind, value);
    return searchParams;
  });
}
