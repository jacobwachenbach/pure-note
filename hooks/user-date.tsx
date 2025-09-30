
// Store User's notes
export type Note = {
    id: string;
    title: string;
    content: string;
}

export const globalNotes: Record<string, Note> = {};