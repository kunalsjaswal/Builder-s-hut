import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import builderContext from "../../../../../context/builderContext";
import { SkillStyleDiv } from "./skillStyle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const Skill = () => {
  const {
    formbg,
    borderbg,
    skillData,
    setSkillData,
    projectData,
    othersData,
    setOthersData,
    setProjectData,
    intershipData,
    setIntershipData,
  } = useContext(builderContext);
  const [val, setVal] = useState("");
  var maxFields = 8 - skillData.length;

  const addField = () => {
    setSkillData([...skillData, { name: val }]);
    setVal("");
  };

  const [type, setType] = useState("");
  const [txValue, setTxValue] = useState("");

  const [dateVal, setDateValue] = useState(dayjs("2014-08-18"));
  const handleChange2 = (newValue) => {
    // console.log(newValue);
    setDateValue(newValue);
  };

  var maxField2 =
    4 - (projectData.length + intershipData.length + othersData.length);
  const addField2 = () => {
    if (type === "Project") {
      // console.log("dateval", dateVal);
      setProjectData([...projectData, { type, name: txValue, date: dateVal }]);
    } else if (type === "Internship") {
      setIntershipData([
        ...intershipData,
        { type, name: txValue, date: dateVal },
      ]);
    } else {
      setOthersData([...othersData, { type, name: txValue, date: dateVal }]);
    }
    setType("");
    setTxValue("");
    setDateValue(dayjs("2014-08-18"));
  };
  const resetAll = () => {
    setIntershipData([]);
    setProjectData([]);
    setOthersData([]);
  };

  return (
    <SkillStyleDiv>
      <section className="skills" style={{ borderColor: borderbg }}>
        <h1 style={{ background: formbg }}>Skills</h1>
        <h4 style={{ color: "red" }}>(* add maximum 8 fields)</h4>
        {skillData.map((vals, ind) => (
          <TextField
            key={ind}
            disabled
            value={vals.name}
            id={`acheiv-field-` + ind}
            variant="filled"
            color="success"
          />
        ))}
        {maxFields > 0 && (
          <TextField
            inputProps={{ maxLength: 20 }}
            label="Enter your skill"
            variant="filled"
            color="success"
            value={val}
            onChange={(ev) => setVal(ev.target.value)}
          />
        )}
        <br />

        <Button
          variant="contained"
          size="large"
          className="all-btns"
          onClick={addField}
          disabled={maxFields === 0 || val.length === 0}
          style={{
            backgroundColor: "GrayText",
            width: "20%",
            marginLeft: "30%",
          }}
        >
          <lord-icon
              src="https://cdn.lordicon.com/ynwbvguu.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{width:"90%",height:"90%",opacity:maxFields === 0 || val.length === 0?"0.6":"1"}}>              
          </lord-icon>
        </Button>

        <Button
          variant="contained"
          className="all-btns"
          size="large"
          onClick={() => setSkillData([])}
          disabled={skillData.length === 0}
          style={{ backgroundColor: "#e65f5f", width: "20%" }}
        >
          <lord-icon
              src="https://cdn.lordicon.com/akuwjdzh.json"
              trigger="hover"
              colors={`primary:#ffffff`}
              style={{width:"90%",height:"90%",opacity:skillData.length===0?"0.6":"1"}}>              
          </lord-icon>
        </Button>
      </section>

      <section className="projects" style={{ borderColor: borderbg }}>
        <h1 style={{ background: formbg }}>Projects and Interships</h1>
        <h4 style={{ color: "red" }}>(* add maximum 4 fields)</h4>
        {projectData.map((vals, ind) => (
          <div key={ind}>
            <TextField
              label="type"
              variant="filled"
              color="success"
              disabled
              value={vals.type}
            />
            <TextField
              label="name"
              variant="filled"
              disabled
              color="success"
              value={vals.name}
            />
            <TextField
              label="date"
              variant="filled"
              disabled
              color="success"
              type="text"
              value={
                vals.date.$d.getDate() +
                " / " +
                vals.date.$d.getMonth() +
                " / " +
                vals.date.$d.getFullYear()
              }
            />
            <br />
            <hr />
          </div>
        ))}
        {intershipData.map((vals, ind) => (
          <div key={ind}>
            <TextField
              label="type"
              variant="filled"
              disabled
              color="success"
              value={vals.type}
            />
            <TextField
              label="name"
              disabled
              variant="filled"
              color="success"
              value={vals.name}
            />
            <TextField
              label="date"
              disabled
              variant="filled"
              color="success"
              value={
                vals.date.$d.getDate() +
                " / " +
                vals.date.$d.getMonth() +
                " / " +
                vals.date.$d.getFullYear()
              }
            />
            <br />
            <hr />
          </div>
        ))}
        {othersData.map((vals, ind) => (
          <div key={ind}>
            <TextField
              label="type"
              variant="filled"
              color="success"
              disabled
              value={vals.type}
            />
            <TextField
              label="name"
              variant="filled"
              color="success"
              disabled
              value={vals.name}
            />
            <TextField
              label="date"
              variant="filled"
              color="success"
              disabled
              value={
                vals.date.$d.getDate() +
                " / " +
                vals.date.$d.getMonth() +
                " / " +
                vals.date.$d.getFullYear()
              }
            />
            <br />
            <hr />
          </div>
        ))}

        {maxField2 > 0 && (
          <div style={{ marginTop: "5%" }}>
            <FormControl fullWidth style={{ width: "20%", marginTop: "1%" }}>
              <InputLabel id="demo-simple-select-label">type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="type"
                onChange={(ev) => setType(ev.target.value)}
              >
                <MenuItem value="Project">Projects</MenuItem>
                <MenuItem value="Internship">Internships</MenuItem>
                <MenuItem value="Other">other</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="name"
              variant="filled"
              color="success"
              value={txValue}
              onChange={(ev) => setTxValue(ev.target.value)}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                label="DATE"
                inputFormat="DD/MM/YYYY"
                value={dateVal}
                onChange={handleChange2}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
        )}
        <br />
        <Button
          variant="contained"
          className="all-btns"
          size="large"
          onClick={addField2}
          disabled={
            maxField2 === 0 || type.length === 0 || txValue.length === 0
          }
          style={{
            backgroundColor: "GrayText",
            width: "20%",
            marginLeft: "30%",
          }}
        >
          <lord-icon
              src="https://cdn.lordicon.com/ynwbvguu.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{width:"90%",height:"90%",
              opacity:maxField2 === 0 || type.length === 0 || txValue.length === 0?"0.6":"1"}}>              
          </lord-icon>
        </Button>

        <Button
          variant="contained"
          className="all-btns"
          size="large"
          onClick={resetAll}
          disabled={
            intershipData.length + projectData.length + othersData.length === 0
          }
          style={{ backgroundColor: "#e65f5f", width: "20%"}}
        >
          <lord-icon
              src="https://cdn.lordicon.com/akuwjdzh.json"
              trigger="hover"
              colors={`primary:#ffffff`}
              style={{width:"90%",height:"90%",opacity:intershipData.length + projectData.length + othersData.length === 0? "0.6":"1"}}>              
          </lord-icon>
        </Button>
      </section>
    </SkillStyleDiv>
  );
};

export default Skill;
