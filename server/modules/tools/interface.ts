export interface ITool {
  id: number,
  title: string,
  link: string,
  description: string,
  tags: string
}

export function createTool({ id, title, link, description, tags } : any): ITool{
  return {
    id, title, link, description, tags
  }
}

export function createTools(data: any[]): ITool[]{
  return data.map(createTool)
}
