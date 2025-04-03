var id = context.getVariable("id");
var raiseValidationError = false;
if(isNaN(id)){
    raiseValidationError = true;
}

if(raiseValidationError)
{
    context.setVariable("isValidationError",true)
}

