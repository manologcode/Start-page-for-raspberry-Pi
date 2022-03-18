
const elements = [
    {
        name: "FILEBROWSER",
        description: "Explorador archivos",
        url: "http://192.168.1.222:8088/",
        color: "#17a2b8",
        logo: "https://avatars.githubusercontent.com/u/35781395?s=280&v=4"
    },
    {
        name: "TRANSMISSION",
        description: "Cliente Torrent",
        url: "http://192.168.1.222:9091/",
        color: "#ffc107",
        logo: "images/transmission.png"
    },
    {
        name: "AMULE",
        description: "Cliente Emule",
        url: "http://192.168.1.222:4711/",
        logo: "images/amule.png"
    },
    {
        name: "YOUTUBE-DL",
        description: "Descargas Youtube",
        url: "http://192.168.1.222:8080/youtube-dl",
        color: "#dc3545",
    },

]


function elementButton(data) {
    const { name, description, url, color = false, logo = false } = data
    const css_color = color ? color : "#505050"
    const icon = logo ? `<img src="${logo}"/>` : ""

    return (
        `<a href="${url}" class="btn" style='background-color:${css_color}'>
            ${icon}
            <h4>${name} </h4>
            <p>${description} </p>
        </a>`
    )
}

const buttons = document.getElementById("buttons")

elements.forEach(item => {
    buttons.insertAdjacentHTML('beforeend', elementButton(item))
})