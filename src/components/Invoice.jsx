import { Radio} from "@material-tailwind/react";
function InvoiceBox(props) {
    const {id, description, clpAmount, usdAmount, type, reference, selectedState, setSelectedState} = props;
    
    const handleClick = () => {
        setSelectedState(id);
    }
    return (
<div className="flex flex-row align-center mb-4 rounded-md hover:bg-violet-200">
  <div className="flex flex-1 w-64">
    <Radio
    id={id}
    checked={selectedState === id? true : false}
    onClick={handleClick}
    />
  </div>
  <div className="w-1/4 h-12">{`${id} (${description})`}</div>
  <div className="w-1/4 h-12">
    <div>{`$${clpAmount} CLP`}</div>
    <div>{`($${usdAmount} USD)`}</div>
    </div>
  <div className="w-1/4 h-12">{reference? reference : type}</div>
</div>
    )
}
export default InvoiceBox