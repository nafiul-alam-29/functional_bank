function getInputFieldValueById(InputId){
    const inputField = document.getElementById(InputId);
    const inputFieldValueString = inputField.value;
    
    const inputFieldValue = parseFloat(inputFieldValueString);
    
    inputField.value = '';
    
    return inputFieldValue;
    

}

function getElementValueById(ElementId)
{
    const element = document.getElementById(ElementId)
    const newElement = element.innerText
    const value = parseFloat(newElement);
    return value;
    
}

function setTextElementValueById(elementId, newValue)
{
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}