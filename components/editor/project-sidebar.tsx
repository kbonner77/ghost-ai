"use client"

import { Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <div
      className={cn(
        "h-full overflow-hidden transition-[width] duration-200 ease-in-out",
        isOpen ? "w-72" : "w-0"
      )}
    >
      <div className="flex h-full w-72 flex-col border-r border-border bg-card">
        {/* Header */}
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-border px-4">
          <span className="text-sm font-medium text-foreground">Projects</span>
          <Button variant="ghost" size="icon-sm" onClick={onClose}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex flex-1 flex-col overflow-hidden p-3">
          <Tabs defaultValue="my-projects" className="flex flex-1 flex-col gap-3">
            <TabsList className="w-full">
              <TabsTrigger value="my-projects" className="flex-1">
                My Projects
              </TabsTrigger>
              <TabsTrigger value="shared" className="flex-1">
                Shared
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="my-projects"
              className="flex flex-1 items-center justify-center"
            >
              <p className="text-sm text-muted-foreground">No projects yet</p>
            </TabsContent>
            <TabsContent
              value="shared"
              className="flex flex-1 items-center justify-center"
            >
              <p className="text-sm text-muted-foreground">No shared projects</p>
            </TabsContent>
          </Tabs>
        </div>

        {/* New Project */}
        <div className="shrink-0 border-t border-border p-3">
          <Button className="w-full gap-2">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>
    </div>
  )
}
