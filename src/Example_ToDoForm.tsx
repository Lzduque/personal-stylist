import React from 'react';

export class Form extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      currentTask: "",
      tasks: []
    } 
  }

  public handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    this.setState({
      currentTask: "",
      tasks: [
        ...this.state.tasks,
        {
          id: this._timeInMilliseconds(),
          value: this.state.currentTask,
          completed: false
        }
      ]
    })
  }

  public renderTasks(): JSX.Element[] {
    return this.state.tasks.map((task: ITask, index: number) => {
      return (
        <div key={task.id}>
          <span>{task.value}</span>
          <button onClick={() => this.deleteTask(task.id)}>Delete</button>
          <button onClick={() => this.toggleDone(index)}>Done</button>
        </div>
      )
    })
  }

  public deleteTask(id: number): void {
    const filteredTasks: Array<ITask> = this.state.tasks.filter((task: ITask) => task.id !== id);
    this.setState({tasks: filteredTasks});
  }

  public toggleDone(index: number): void {
    let task: ITask[] = this.state.tasks.splice(index, 1);
    task[0].completed = !task[0].completed;
    const currentTasks: ITask[] = [...this.state.tasks, ...task];
    this.setState({tasks: currentTasks});
  }

  public render(): JSX.Element {
    console.log(this.state);
    return (
      <div>
        <h1>React form</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input 
            type="text" 
            placeholder="Add a Task"
            value={this.state.currentTask}
            onChange={(e) => this.setState({currentTask: e.target.value}) }/>
          <button type="submit">
            Add Task
          </button>
          <section>
            {this.renderTasks()}
          </section>
        </form>
      </div>
    )
  }

  private _timeInMilliseconds(): number {
    const date: Date = new Date();
    return date.getTime()
  }
}
export default Form;

interface IState {
  currentTask: string;
  tasks: Array<ITask>
}

interface ITask {
  id: number;
  value: string;
  completed: boolean
}

