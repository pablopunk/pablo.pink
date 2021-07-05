export interface PageProps {
  page?: {
    content: {
      body: any[]
      metadata: any
    }
    lang: string
    path: string
  }
  preview?: boolean
  statusCode?: string
}
