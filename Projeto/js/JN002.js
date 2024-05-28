        const group = document.querySelector('.group');
        for(let i = 1; i<20; i++){
            const containerId = `iconContainer${i}`
            const container = document.createElement('div');
            container.className = 'iconContainer';
            container.id = containerId;
            group.appendChild(container);
            addIcons(containerId);
        } 

        function addIcons(containerId){
            const iconContainer = document.getElementById (containerId);
            Unicode = [
                '\uf011',
                '\uf012',
                '\uf013',
                '\uf019',
                '\uf021',
                '\uf023',
                '\uf025',
                '\uf028',
                '\uf029',
                '\uf044',
                '\uf045',
                '\uf046',
                '\uf074',
                '\uf079',
                '\uf084',
                '\uf085',
                '\uf090',
                '\uf091',
                '\uf093',
                '\uf103',
                '\uf108',
                '\uf109',
                '\uf114',
                '\uf115',
                '\uf120',
                '\uf121',
                '\uf125',
                '\uf126',
                '\uf187',
                '\uf188',
                '\uf204',
                '\uf233',
                '\uf241',
                '\uf245',
                '\uf249',
            ]
            for (let i = 0; i<50; i++){
                const icon = document.createElement('i');
                icon.className = 'icon fas'
                icon.innerHTML = randomIcon(Unicode);
                //icon.innerHTML = i+Unicode[i];
                iconContainer.appendChild(icon);
            }
        }

        function randomIcon(values){
            const randomIndex = Math.floor(Math.random() * values.length);
            return values[randomIndex];
        }