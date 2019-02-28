class JCalendar {

    constructor(options){
        // set up/pass arguments
        this.id = options.id;
        this.ROOT = document.querySelector("#" + options.id);
        this.DAYS = ['Mo','Tu','We','Th','Fr','Sa','Su'];
        this.DAYSFIX = [1,2,3,4,5,6,0];
        this.MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
        this.API = options.api ? options.api : undefined;
        if (this.API === undefined) {errorLog("API location not set")};
        if ((options.startDate != null) && (options.startDate != false)) {
            this.initialDate = options.startDate; 
        } else {
            this.date = new Date();
            this.initialDate = `${this.date.getFullYear()}/${this.date.getMonth() + 1}/${this.date.getDate()}`;
        }
        this.currentDate = this.initialDate;
        this.loadCalendar();
    }    

    loadCalendar() {
        // set up main calendar display elements
        this.mainContainer = this.pageElement({type: "div", classname: "main-container", location: this.ROOT}); 
        this.calendarContainer = this.pageElement({type: "div", classname: "calendar-container", location: this.mainContainer});
        this.headerContainer = this.pageElement({type: "div", classname: "header-container", location: this.calendarContainer});
        this.contentContainer = this.pageElement({type: "div", classname: "content-container",location: this.calendarContainer});
        this.footerContainer = this.pageElement({type: "div", classname: "footer-container", location: this.calendarContainer});
        this.monthHeading = this.pageElement({type: "div", classname: "month-heading", location: this.headerContainer});
        this.previousMonthButton = this.pageElement({type: "div", classname: "month-button", location: this.monthHeading, id: this.id + "_prev"});
        this.monthTitle = this.pageElement({type: "div", classname: "month font-heading", location: this.monthHeading});
        this.nextMonthButton = this.pageElement({type: "div", classname: "month-button", location: this.monthHeading, id: this.id + "_next"});
        this.dayNameContainer = this.pageElement({type: "div", classname: "dayname-container", location: this.contentContainer});
        this.daynames = this.pageElementDaysHeader({type: "div", classname: "daynames font-daynames", location: this.dayNameContainer});
        this.daysContainer = this.pageElement({type: "div", classname: "days-container", location: this.contentContainer});
        this.setUpListeners();

        // render calendar in ROOT div
        this.setupCalendar({monthTitle: this.monthTitle, daysContainer : this.daysContainer, dateCheck : this.currentDate});
    }

    pageElement(object) {
        let newPageElement = document.createElement(object.type);
        newPageElement.className = object.classname;
        object.text ? newPageElement.innerText = object.text : false ;
        object.id ? newPageElement.id = object.id : false;
        if (object.dateid) { 
            let dateid = document.createAttribute("date-id"); 
            dateid.value = object.dateid;
            newPageElement.setAttributeNode(dateid);
        }
        object.location.appendChild(newPageElement);
        return newPageElement;
    }

    pageElementDaysHeader(object) {
        for (let i = 0 ; i <= this.DAYS.length -1 ; i++) {
            let newPageElement = this.pageElement({type: "div",classname: object.classname, location: object.location, text: this.DAYS[i]});
        }
    }

    setupCalendar(object) {
        let checkDate;
        const TODAY = new Date();
        object.dateCheck ? checkDate = new Date(object.dateCheck) : checkDate = new Date();
        object.monthTitle.innerText = `${this.MONTHS[checkDate.getMonth()]} ${checkDate.getFullYear()}`;
        
        object.daysContainer.innerHTML="";
        // get first of month and fill in blanks at beginning of month
        let firstDayOfMonth = new Date(checkDate.getFullYear() + "," + (checkDate.getMonth() + 1) + ",1");
        for (let i=0; i < 7; i++) {
            if (this.DAYSFIX[i]===firstDayOfMonth.getDay()) {
                break;
            } else {
                this.pageElement({type:"div",classname:"day",location: object.daysContainer});
            }
        }
        // loop through calendar days
        let lastDayOfMonth = new Date(checkDate.getFullYear(),(checkDate.getMonth() + 1), 0);
        
        for (let i=0 ; i < lastDayOfMonth.getDate() ; i++) {
            let dayType;
            let check1 = `${TODAY.getFullYear()} ${(TODAY.getMonth() + 1)} ${(TODAY.getDate())}`;
            let check2 = `${checkDate.getFullYear()} ${(checkDate.getMonth() + 1)} ${(i+1)}`;
            let timeCheck1 = new Date(check1).getTime();
            let timeCheck2 = new Date(check2).getTime();
            let dateid = `${this.pad(checkDate.getFullYear(),4)}-${this.pad((checkDate.getMonth() + 1),2)}-${this.pad((i+1),2)}`;
            if (check1===check2) {
                    dayType=" date-present hover";
                } else if (timeCheck1 < timeCheck2) {
                    dayType=" date-future ";
                } else {
                    dayType=" date-past ";
                }
            this.pageElement({type: "div", classname: "day font-day " + dayType, location: object.daysContainer, text: i+1, dateid: dateid});
        }
        this.loadNewData();
    }

    setUpListeners() {
        document.querySelector("#" + this.id + "_next").addEventListener("click",() => {this.nextMonth();});
        document.querySelector("#" + this.id + "_prev").addEventListener("click",() => {this.previousMonth();});
        document.querySelector(".content-container").addEventListener("click",(e) => {this.displayDayInfo(e.target);});
    }

    previousMonth() {
        this.currentDate = this.fetchNewMonth("month-prev", this.currentDate);
        this.setupCalendar({monthTitle: this.monthTitle, daysContainer : this.daysContainer, dateCheck : this.currentDate});
    }

    nextMonth() {
        this.currentDate = this.fetchNewMonth("month-next",this.currentDate);
        this.setupCalendar({monthTitle: this.monthTitle, daysContainer : this.daysContainer, dateCheck : this.currentDate});
    }

    fetchNewMonth(type = false, date = false) {
        let dateNew = new Date(date);
        if (type === "month-next") {
            if (dateNew.getMonth() == 11) {
                return new Date(dateNew.getFullYear() + 1, 0, 1);
            } else {
                return new Date(dateNew.getFullYear(), dateNew.getMonth() + 1, 1);
            }
        } else if (type==="month-prev") {
            if (dateNew.getMonth() == 0) {
                return new Date(dateNew.getFullYear() - 1, 11, 1);
            } else {
                return new Date(dateNew.getFullYear(), dateNew.getMonth() - 1, 1);
            }
        }
        return false;
    }

    displayDayInfo(target) {
        this.footerContainer.innerHTML = "Fetching Data For : " + target.getAttribute("date-id");
    }

    loadNewData() {
        // get data from api and populate page
        console.log("Fetching Data...");
    }

    errorLog(error) {
        console.log(`ERROR: ${error}`);
    }

    pad(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    }
}
