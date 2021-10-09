import { Schema, model } from 'mongoose';

export const LogEntrySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    comments: String,
    image: String,
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'], // means type has to be string with value 'Point'
        required: true,
      },
      coordinates: {
        type: [Number], // will store long and latt
        required: true,
      },
    },
    visitDate: {
      required: true,
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  },
);

export interface ILogEntry {
  title: string;
  description: string;
  comments: string;
  image: string;
  rating: number;
  location: {
    type: 'Point';
    coordinates: [number, number];
  };
  visitDate: string;
}
