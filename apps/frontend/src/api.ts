export type Task = {
  id: string
  title: string
  description: string
  status: number // 1 TODO, 2 IN_PROGRESS, 3 DONE
  priority: number
  completed: boolean
  created_at?: string
}

const API = '/api'

export async function listTasks(): Promise<Task[]> {
  const res = await fetch(`${API}/tasks?include_completed=true`)
  const data = await res.json()
  return data.tasks
}

export async function createTask(payload: {title:string, description:string, status:number, priority:number}): Promise<Task> {
  const res = await fetch(`${API}/tasks`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)})
  if (!res.ok) {
    let detail = `HTTP ${res.status}`
    try {
      const body = await res.json()
      if (body?.detail) detail = String(body.detail)
    } catch {}
    throw new Error(detail)
  }
  return res.json()
}

export async function toggleTask(id: string) {
  const res = await fetch(`${API}/tasks/${id}/toggle`, { method:'PATCH'})
  return res.json()
}

export async function deleteTask(id: string) {
  const res = await fetch(`${API}/tasks/${id}`, { method:'DELETE'})
  return res.json()
}
