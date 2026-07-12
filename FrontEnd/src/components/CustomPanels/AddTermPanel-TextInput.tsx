

type AddTermPanelTextInputProps = {
    labelName:  string,
    inputType?: string,
    data:       string,
    setData:    React.Dispatch<React.SetStateAction<string>>;

}

export function AddTermPanelTextInput(
    {labelName, inputType, data, setData}: AddTermPanelTextInputProps
){ 
    return(

            <div className="
                   text-black flex flex-col my-2 p-2
                    flex justify-center items-center 
                    font-bold 
                ">
              <label htmlFor="term-name">{labelName}</label>
              <input 
                    type={inputType || "text"}
                    name="term-name"
                    placeholder="Term Name..."
                    value={data}
                    onChange={(e) => {setData(e.target.value)}}
                    className="
                        max-w-60 bg-white py-1 px-3 my-2
                        border-none border-black border-solid
                        rounded-lg
                        "
                />
            </div>
    )
}