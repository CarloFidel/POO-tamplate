export function findOnePosition(arr, target) {
  let position = -1;
  let i = 0;
  do {
    if (arr[i] === target) {
      position = i;
      return position;
    }
    i++;
  } while (i < arr.length && position === -1);
  return position;
}

export function findAllPositions(arr, target) {
  let positions = [];
  let i = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      positions.push(i);
    }
  }
  return positions;
}

export function cleanInputs(inputs){
    inputs.forEach(input => {
        input.value = "";
    });
}

export function validateEmptyInputs(inputs){
    let validate = true;
    inputs.forEach(input => {
        if(input.value.trim() === ""){
            validate = false;
        }
    });
    return validate;
}