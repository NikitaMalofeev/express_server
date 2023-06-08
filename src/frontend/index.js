let tbody = document.getElementById("tbody")
let button = document.getElementById("button")

tbody.append(...td_fun());

//запрос по кнопке

const postData = async () => {
    const inputData = document.getElementById("form_input").value

    const response = await fetch('http://localhost:3001/api', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ 
            data: inputData
        })
    });

    const data = await response.json();

    console.log(data);

    tbody.append(...td_fun(data));
}

button.addEventListener('click', postData) 

function td_fun(data = {}) {
    const array = Array.from(Object.entries(data));

    // [['test', 'test'], ['additionalData', string]];

    return array.map(([ key, value ]) => {
        let td = document.createElement('tr');

        td.innerHTML = `
        <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
                
                <div class="ml-4">
                    <div class="text-sm font-medium text-gray-200">
                        ${key}
                    </div>
                    <div class="text-sm text-gray-500">
                        ${value}
                    </div>
                </div>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                
            </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <span class="text-sm text-gray-500"></span>
        </td>
        `;

        return td;
    });
}