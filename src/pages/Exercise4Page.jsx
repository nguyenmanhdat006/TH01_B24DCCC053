import StudentCard from "../components/Exercise4";

const Exercise4Page = () => {
  const students = [
    { name: "Nguyễn Văn A", age: 20, className: "CNTT1" },
    { name: "Trần Thị B", age: 21, className: "CNTT2" },
    { name: "Lê Văn C", age: 19, className: "CNTT3" },
  ];

  return (
    <div>
      <h1>Bài 4: Thẻ thông tin sinh viên</h1>
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          age={student.age}
          className={student.className}
        />
      ))}
    </div>
  );
};

export default Exercise4Page;
