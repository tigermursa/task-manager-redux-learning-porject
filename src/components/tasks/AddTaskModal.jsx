import React from "react";
import Modal from "../ui/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const randomNames = [
  "John Doe",
  "Jane Smith",
  "Alice Johnson",
  "Bob Brown",
  "Ella Wilson",
];

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="I can do it">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Title</label>
          <input
            className="w-full rounded-md"
            type="text"
            {...register("name")}
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="w-full rounded-md"
            rows="4"
            {...register("description")}
          ></textarea>
        </div>

        {/* Deadline (Date Picker) */}
        <div className="flex flex-col gap-3">
          <label htmlFor="deadline">Deadline</label>
          <input
            className="w-full rounded-md"
            type="date"
            {...register("deadline")}
          />
        </div>

        {/* Assign To */}
        <div className="flex flex-col gap-3">
          <label htmlFor="assignTo">Assign To</label>
          <select className="w-full rounded-md" {...register("assignTo")}>
            {randomNames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* Priority */}
        <div className="flex flex-col gap-3">
          <label htmlFor="priority">Priority</label>
          <select className="w-full rounded-md" {...register("priority")}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button onClick={() => onCancel} type="submit">
          Cancel
        </button>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
