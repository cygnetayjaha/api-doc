/**
 * @api {get} events/ Request for All events
 * @apiName GetEvents
 * @apiGroup Event
 *
 * @apiSuccessExample Success-Response:
	[
		{
		"data": {
			"userId": 3,
			"name": "Default User",
			"email": "user@user.com",
			"events": [
				{
					"eventId": 3,
					"eventName": "Third ",
					"eventTitle": "random title for events",
					"eventStartDate": "05-04-2017",
					"eventEndDate": "26-04-2017"
				},
			"status": true,
			"message": "Success",
			"code": 200
		}
		}
	]
 * 
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Event Not Found"
 *     }
 */

////////////////////////////////////////////////////////////////////////

/**
 * @api {post} events/create/ Create New Event
 * @apiName createEvent
 * @apiGroup Event
 *
 * @apiParam (Event) {string} name Event Name Required
 * @apiParam (Event) {string} title Event Title Required
 * @apiParam (Event) {number} user_id User Id
 * @apiParam (Event) {date} start_date Event Start Date
 * @apiParam (Event) {date} end_date Event End Date
 * 
 * @apiSuccessExample Success-Response:
	[
    {
        "data": {
            "eventId": 96,
            "eventName": "ABC",
            "eventTitle": "NEW AEV",
            "eventStartDate": "08-08-2016",
            "eventEndDate": "09-09-2015"
        },
        "status": true,
        "message": "Event is Created Successfully",
        "code": 200
    }
]
 * 
 *
 *
 * @apiErrorExample Error-Response:
	[
    {
        "error": {
            "reason": "Invalid Inputs"
        },
        "status": false,
        "message": "Something went wrong !",
        "code": 400
    }
]
 */
