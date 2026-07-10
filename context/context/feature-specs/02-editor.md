We need to base the Chrome components that frame every editor screen - the top nav bar and the left sidebar shell. These will be reused and extended in every chapter that follows. 

### Editor NavBar

Create 'componenents/editor/editor-navbar.tsx

Requirements: 

- fixed height top navbar
- left, center, and right sections
- Left section contains sidebar and toggle button 
- use 'PanelLeftOpen' / 'PanelLeftClose' icons based on sidebar state 
- right section stays empty for now. 
- Dark background with subtle bottom border. 

### Project Sidebar

Craete 'components/editor/project-sidebar.tsx'.

Requirements: 

- sidebar should float above the editor canvas. 
- Opening it should push page content. 
- Slides in from the left 
- accepts 'isOpen' prop
- header with 'Projects' title + close button
- shadcn 'Tabs':
    - My Projects
    - Shared
- Both tabs show empty placeholder state. 
- full-width 'New Project' button at the bottom with 'Plus' icon

### Dialog Pattern

Use the existing color tokens from 'glbals.css' for dialog styling.

Support:
- title
- description
- footer actions

Do not build actual dialogues yet. 

### Check when done

- New components compile without TypeScript errors. 
- No lint errors
- dialog pattern is ready for future use. 