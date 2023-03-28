// Description: This file contains the functions that will be used to create, read, update and delete submissions
import Submission from "../schemas/submission.js";
import Assignment from "../schemas/assignment.js";
import Module from "../schemas/module.js";
import mongoose from "mongoose";

// Create User Assignment Submission
const createSubmission = async (req, res) => {
  const { userId, moduleId, assignmentId, binData } = req.body;
  const submissionContent = new Submission({
    _id: new mongoose.Types.ObjectId(),
    userId: userId,
    moduleId: moduleId,
    assignmentId: assignmentId,
    binData: binData,
  });
  try {
    const savedSubmission = await submissionContent.save();
    res.status(201).json(savedSubmission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get User Assignment Submission
const getSubmission = async (req, res) => {
  const { userId, moduleId, submissionId } = req.params;
  try {
    const foundSubmission = await Submission.findOne({
      submissionId: submissionId,
      userId: userId,
      moduleId: moduleId,
    });
    if (foundSubmission === null) {
      return res.status(404).json({ message: "Cannot find submission" });
    } else {
      res.status(201).json(foundSubmission);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update User Assignment Submission
const updateSubmission = async (req, res) => {
  const { userId, submissionId, binData, marker, marked } = req.params;
  if (marked) {
    try {
      const updatedSubmission = await Submission.updateOne(
        { userId: userId, submissionId: submissionId },
        { $set: { marked: marked } }
      );
      res.status(201).json(updatedSubmission);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  if (marker) {
    try {
      const updatedSubmission = await Submission.updateOne(
        { userId: userId, submissionId: submissionId },
        { $push: { marker: marker } }
      );
      res.status(201).json(updatedSubmission);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  if (binData) {
    try {
      const updatedSubmission = await Submission.updateOne(
        { userId: userId, submissionId: submissionId },
        { $set: { binData: binData } }
      );
      res.status(201).json(updatedSubmission);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

// Delete user assignment submission
const deleteSubmission = async (req, res) => {
  const { userId, moduleId, submissionId } = req.params;
  try {
    const submission = await Submission.findOne({
      submissionId: submissionId,
      userId: userId,
      moduleId: moduleId,
    });
    if (!submission)
      return res.status(404).json({ message: "Cannot find submission" });

    if (submission.userId === req.userId) {
      return res.status(401).json({ message: "Cannot delete this submission" });
    }
    const deletedSubmission = await Submission.findOneAndDelete({
      submissionId: submissionId,
      userId: userId,
      moduleId: moduleId,
    });
    res.status(201).json(deletedSubmission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default {
  createSubmission,
  getSubmission,
  updateSubmission,
  deleteSubmission,
};
