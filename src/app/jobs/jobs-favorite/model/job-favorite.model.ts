import {Job} from "src/app/jobs/model/job.model";

export type JobWithFavorite = Job & { favorite: boolean };
