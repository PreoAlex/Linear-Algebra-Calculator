const scal = document.getElementById('scal');
const v1 = document.getElementById('v1');
const v2 = document.getElementById('v2');

export function updateVecDim() {

    const vecDim = parseInt(document.getElementById('vector-dim-select').value);

    v1.innerHTML = '';
    v2.innerHTML = '';

    for(let i = 1; i <= vecDim; i++) {

        v1.innerHTML += `<input class="vec-entry-input" id="v1${i}" placeholder="0" type="number">`;
        v2.innerHTML += `<input class="vec-entry-input" id="v2${i}" placeholder="0" type="number">`;
    }

}

export function updateVecCalc() {

    const vecCalc = document.getElementById('vector-calc-select').value;

    if(vecCalc === 'Add') {

        scal.style.display = 'none';
        v2.style.display = 'flex';

    } else if (vecCalc === 'Subtract') {

        scal.style.display = 'none';
        v2.style.display = 'flex';

    } else if (vecCalc === 'Scalar Product') {

        scal.style.display = 'inline';
        v2.style.display = 'none';

    } else if (vecCalc === 'Dot Product') {

        scal.style.display = 'none';
        v2.style.display = 'flex';

    } else if (vecCalc === 'Cross Product') {

        scal.style.display = 'none';
        v2.style.display = 'flex';

    } else if (vecCalc === 'Magnitude') {

        scal.style.display = 'none';
        v2.style.display = 'none';

    } else if (vecCalc === 'Normalize') {

        scal.style.display = 'none';
        v2.style.display = 'none';

    } else if(vecCalc === 'Angle') {

        scal.style.display = 'none';
        v2.style.display = 'flex';

    }

}

document.getElementById('vector-dim-select').addEventListener('change', updateVecDim);
document.getElementById('vector-calc-select').addEventListener('change', updateVecCalc);