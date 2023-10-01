import React, { useState,useRef} from 'react';
import { InputText } from 'primereact/inputtext';
import { SplitButton } from 'primereact/splitbutton';
import {styles} from '../App.css';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';

export const FormLayoutDemo = () => {

    const [dropdownItem, setDropdownItem] = useState(null);
    const [value1, setValue1] = useState('');
      const [value4, setValue4] = useState('');
    const dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];
    const toast = useRef(null);
    const items = [
        {
            label: 'Age(3 - 5) Year',
          
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Age(7 - 10) Year',
            
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Age(10 - 12) Year',
           
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
      
    ];
    const items1 = [
        {
            label: 'Stage 1 ',
          
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Stage 2',
            
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Stage 3',
           
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
      
    ];
    const items2 = [
        {
            label: 'Epression 1',
          
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Epression 2',
            
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Epression 3',
           
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
      
    ];
    const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

  const placeholder1 = "Price";
  const placeholder2 = "MRP";
  const placeholder3 = "Date";

  const placeholderWidth1 = placeholder1.length * 10; // Adjust the multiplier based on your font size and desired spacing
  const placeholderWidth2 = placeholder2.length * 10; // Adjust the multiplier based on your font size and desired spacing
  const placeholderWidth3 = placeholder3.length * 10; // Adjust the multiplier based on your font size and desired spacing

  const inputStyle = {
    width: `${placeholderWidth1}px`
  };

  const inputStyle2 = {
    width: `${placeholderWidth2}px`
  };

  const inputStyle3 = {
    width: `${placeholderWidth3}px`
  };

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleInputChange3 = (event) => {
    setInputValue3(event.target.value);
  };
    return (
        <>
 <div className="grid p-justify-content-between">
    <div className="col-12 md:col-6 lg:col-3">
        <div className="surface-0 shadow-2 p-5 border-0 border-60 border-round">
            <div className="flex justify-content-between mb-3">
                <div>
                    <span className="block text-3xl font-medium justify-content-right mb-3">Age</span>
                    <SplitButton label="Age(3 - 5) Year"  model={items} className="text-3xl" rounded/>
                </div>
                <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-user text-blue-500 text-xl"></i>
                </div>
            </div>
            <span className="text-green-500 font-medium justify-content-between">Select Age </span>
            <span className="text-600">According to your child</span>
        </div>
    </div>
    <div className="col-12 md:col-6 lg:col-3">
        <div className="surface-0 shadow-2 p-5 border-0 border-60 border-round">
            <div className="flex justify-content-between mb-3">
                <div>
                    <span className="block text-3xl font-medium mb-3">Stage</span>
                    <SplitButton label="Stage 1"  model={items1} className="text-3xl" rounded/>
                </div>
                <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                </div>
            </div>
            <span className="text-green-500 font-medium">+20 Stages </span>
            <span className="text-600"></span>
        </div>
    </div>
    <div className="col-12 md:col-6 lg:col-3">
        <div className="surface-0 shadow-2 p-5 border-0 border-60 border-round">
            <div className="flex justify-content-between mb-3">
                <div>
                    <span className="block text-3xl font-medium mb-3">Creative Expressions</span>
                    <SplitButton label="Expression 1"  model={items2} className="text-3xl" rounded/>
                </div>
                <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-comment text-purple-500 text-xl"></i>
                </div>
            </div>
            <span className="text-green-500 font-medium">+3 mores </span>
            <span className="text-600"> Creative Expression Add</span>
        </div>
    </div>

    <div className="flex justify-content-between p-4   mb-3">
                <div>
                    <span className="block text-5xl font-large mb-3 gap-3">   <Button label="Save" className="p-button-outlined p-button-help mr-5 mb-5 shadow-3" /></span>
                
                </div>
                
    </div>
    


 </div>
    <br></br>
    
 <span className="block text-2xl font-medium mb-3">Below are the activities </span>
 <div className="grid">
    <div className="col-12 md:col-6">
        <div className="card">
            <h5>Activity Name</h5>
            <InputText  className="field col-12 md:col-4" type="text" placeholder=""></InputText>
        </div>

        <div className="card">
            <h5>Activity Description</h5>
            <InputText  className="field col-12 md:col-4" type="text" placeholder=""></InputText>
        </div>
        <div className="card">
                    <h5>Activity Tips</h5>
                    <InputText  className="field col-12 md:col-4" type="text" placeholder=""></InputText>
                </div>
                <div className="card">
                    <h5>Activity Benefits</h5>
                    <InputText  className="field col-12 md:col-4" type="text" placeholder=""></InputText>
                </div>
                <div className="card">
            <h5>Activity Video URL</h5>
            <InputText  className="field col-12 md:col-4" type="text" placeholder=""></InputText>
        </div>
                <div className="card">
            <h5>Activity Image URL</h5>
            <InputText  className="field col-12 md:col-4" type="text" placeholder=""></InputText>
        </div>
        <div className="card">
            <h5>Activity Pdf URL</h5>
            <InputText  className="field col-12 md:col-4" type="text" placeholder=""></InputText>
        </div>
        <div className="card">
        {/* First Input */}
      <InputText
        type="text"
        value={inputValue1}
        onChange={handleInputChange1}
        placeholder={placeholder1}
        style={inputStyle}
      />

      {/* Second Input */}
      
      <InputText
      className='same'
        type="text"
        value={inputValue2}
        onChange={handleInputChange2}
        placeholder={placeholder2}
        style={inputStyle2}
        
      />

      {/* Third Input */}
      <InputText
        type="text"
        value={inputValue3}
        onChange={handleInputChange3}
        placeholder={placeholder3}
        style={inputStyle3}
      />
                     
     
        </div>
     </div>
     <div className="col-12 md:col-6">
                <div className="card">
                    <h5>Activity 1</h5>
                    <div className="grid p-fluid mt-3">
                <div className="field col-12 md:col-4">
                <InputText  className="field col-12 md:col-4" type="text" placeholder=""></InputText>
                </div>
             </div>
                    
                </div>

                <div className="card">
                    <h5>Activity 2</h5>
                    <div className="grid p-fluid mt-3">
                <div className="field col-12 md:col-4">
                <InputText type="text" placeholder=""></InputText>
                </div>
             </div>
                   
                </div>
                <div className="card">
                    <h5>Activity 3</h5>
                    <div className="grid p-fluid mt-3">
                <div className="field col-12 md:col-4">
                <InputText type="text" placeholder=""></InputText>
                </div>
             </div>
                
                </div>
                <div className="card">
            <h5>Activity 4</h5>
            <div className="grid p-fluid mt-3">
                <div className="field col-12 md:col-4">
                <InputText type="text" placeholder=""></InputText>
                </div>
             </div>
        </div>
     </div>
</div>     
      
        </>
    )
}
