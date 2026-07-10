"use client"

import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EditorNavBarProps {
  isOpen: boolean
  onToggle: () => void
}

export function EditorNavBar({ isOpen, onToggle }: EditorNavBarProps) {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-12 items-center border-b border-border bg-card px-3">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={onToggle}>
          {isOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
      <div className="flex-1" />
      <div className="flex items-center" />
    </header>
  )
}
