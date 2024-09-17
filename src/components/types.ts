export interface MainTask extends TaskBase {
    SubTasks: TaskBase[];
}

export type TaskBase = {
    Id: number;
    Title: string;
    IsComplete: boolean;
};
