{
  /**
   * オブジェクトの型定義
   */
  const todo: { 
    title: string; 
    contents: string; 
    progressRate: number 
  } = {
    title : "TODOのタイトル",
    contents : "TODOの内容",
    progressRate : 40
  }
}
{
  interface TodoIF { 
    title: string; 
    contents: string; 
    progressRate: number 
  }
  const todo: TodoIF = {
    title : "TODOのタイトル",
    contents : "TODOの内容",
    progressRate : 40
  }
}
{
  type TodoType = { 
    title: string; 
    contents: string; 
    progressRate: number 
  }
  const todo: TodoType = {
    title : "TODOのタイトル",
    contents : "TODOの内容",
    progressRate : 40
  }
}