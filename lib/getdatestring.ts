export default function getDateString (timenum: number) {
    const timeDiff = Date.now() - timenum;
    if (timeDiff < 60 *1000){
       return 'just now';
    }
    if (timeDiff < 60 * 2 * 1000){
        return '1 min';
    }
    if (timeDiff < 60 * 60 * 1000){
        return Math.floor(timeDiff/(1000*60)).toFixed() + 'mins';
    }
    if (timeDiff < 2 * 60 * 60 * 1000){
        return '1 hr';
    }
    if (timeDiff < 24 * 60 * 60 *1000){
        return Math.floor(timeDiff/(1000*60*60)).toFixed() + 'hrs';
    }
    
    const d = new Date(timenum);
    return (d.getMonth()+1) + "-" + d.getDate() + "-" + d.getFullYear();
}
