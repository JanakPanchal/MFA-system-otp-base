# MFA-system-otp-base
this is MFA system for user verification using otp

# http://0.0.0.0:3000/api/gettoken
request 
[
	{
		"clinet_id" : "1",
		"app_name" : "aws",
		"app_key" : "1234455666"
	},
	{
		"clinet_id" : "1",
		"app_name" : "test",
		"app_key" : "22222222"

	}
]

respones 
{
    "data": [
        {
            "clinet_id": "1",
            "app_name": "aws",
            "app_key": "1234455666",
            "otp": 582615
        },
        {
            "clinet_id": "1",
            "app_name": "test",
            "app_key": "22222222",
            "otp": 221266
        }
    ]
}


# http://0.0.0.0:3000/api/otpverification
request
{
    "clinet_id": "1",
    "app_name": "aws",
    "app_key": "1234455666",
    "otp": "935881"
}
respone 
{
    "status": false
}




