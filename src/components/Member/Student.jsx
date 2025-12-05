import React, { useState } from "react";

function Student() {
  const [name, setName] = useState("Huy");
  const [khoa, setKhoa] = useState("CNTT");
  const [newName, setNewName] = useState("");
  const [newKhoa, setNewKhoa] = useState("");
  function handleChange() {
    if (newName.trim() !== "") {
      setName(newName);
      setNewName("");
    }
    if (newKhoa.trim() !== "") {
      setKhoa(newKhoa);
      setNewKhoa("");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <StudentInfo name={name} khoa={khoa} />

      <div style={{ marginTop: "20px" }}>
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Nhập tên mới"
          required
        />
        <input
          value={newKhoa}
          onChange={(e) => setNewKhoa(e.target.value)}
          placeholder="Nhập tên khoa mới"
          required
        />

        <button onClick={handleChange} style={{ marginLeft: "10px" }}>
          Change
        </button>
      </div>
    </div>
  );
}

function StudentInfo(props) {
  return (
    <div>
      <h1>Thông tin sinh viên:</h1>
      <p>
        <strong>Tên:</strong> {props.name}
      </p>
      <p>
        <strong>Khoa:</strong> {props.khoa}
      </p>
    </div>
  );
}

export default Student;
