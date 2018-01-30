import urllib2
import json

file = open("test.txt", "r")

content = []

for line in file:
    content.append(line)


home = content[0].strip().replace(" ", "%20")
destination = content[1].strip().replace(" ", "%20")


url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&key=AIzaSyC7ZCMYbXM7VEDeJFXsy57MEB7buQxOhso&origins=" + home+ "&destinations=" + destination

response = urllib2.urlopen(url)

data = json.loads(response.read())


time = data["rows"][0]["elements"][0]["duration"]["text"]
finaltime=time.split()[0]



f= open("output.txt","w+")
f.write(finaltime)
f.close() 




