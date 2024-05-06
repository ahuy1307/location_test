export const FolderIcon = ({className} : {className?: string}) => {
    return <svg className={className} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20px"
                width="20px" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"></path>
    </svg>


}

export const LocationIcon = ({className}: { className?: string }) => {
    return <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        <path fill="none" d="M0 0h24v24H0z"/>
    </svg>

}