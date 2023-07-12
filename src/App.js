import React, { useState, useEffect } from 'react';
import data from "./public/data/model1.json"


function App() {

  const [dataModel, setDataModel] = useState(data);
  const [selectModel, setSelectedModel] =useState(data[0])
  const [formX , setFormX] = useState(0);
  const [formY , setFormY] = useState(0);
  const [val , setVal] = useState(0);

 
  const handleModelChange = (event) => {
    const selected = event.target.value;
    const model = dataModel.find(m => m.name === selected);
    setSelectedModel(model);
  };



  useEffect(() => {
    const calculate = (x,y,z) => {
      x = selectModel.fields.x.defaultValue
      y = selectModel.fields.y.defaultValue
     

      const exp = selectModel.fields.action.calculate;
      const ans = eval(exp)
      setVal(ans);
    };
    calculate()
    setFormX(selectModel.fields.x.defaultValue)
    setFormY(selectModel.fields.y.defaultValue)
  }, [selectModel])

  return (
    <div className="App">
      <h1>Dynamic Data App</h1>
      <div>
        <label>Select Data Model:</label>
        <select value={selectModel.name} onChange={handleModelChange} style={{
          width:"500px"
        }}  >
         {
          dataModel.map((model)=>{ 
            return(
            
              <option key={model.name} value={model.name}>{model.name}</option>
          )}
          )
         }
        </select>
      </div>
         <div className="prompt">
          <div>
          <label htmlFor="xvalue">x- value: </label>
          <input type="text" name="x" value={formX} onChange={(e)=>e.target.value}/>
          </div>
         <div>
          <label htmlFor="yvalue">y- value: </label>
          <input type="text" name="y" value={formY} onChange={(e) => e.target.value} />
         </div>
         <div>
          <label htmlFor="ans">Ans of {selectModel.name} </label>
          <input type="text" name="ans" value={val} onChange={(e) => e.target.value} />
         </div>
       
         </div>
    </div>
  );
}



export default App;
