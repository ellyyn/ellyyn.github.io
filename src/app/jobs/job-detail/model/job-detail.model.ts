import {Job} from "src/app/jobs/model/job.model";

export type JobDetail = Job & {
  types: string[];
  industries: string[];
  publishDate: Date;
  location: string;
  description: string;
}
