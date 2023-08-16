## MEDICAL STAFF


## To add or remove jobs:  
Locate `data/jobs.json`. to post new job add new item in the same structure. Remember to keep the id unique across jobs.



```js
{
  "jobs": [
  {
    "id": 1,
      "date_posted": "2023-04-02",
      "category": "Nursing",
      "location": "Victoria",
      "job_type": "full time",
      "title": "Clinical Nurse Specialist - Intensive Care Unit",
      "job_description": "Provide specialized nursing care to critically ill patients in an intensive care unit. Must be able to monitor patients, administer medications and treatments, and collaborate with a multidisciplinary team of healthcare professionals.",
      "requirements": [
        "Bachelor's degree in Nursing",
      "Current registration with AHPRA as a Registered Nurse",
      "Minimum 5 years of experience in critical care nursing",
      "Postgraduate qualification in critical care nursing",
      "Excellent communication and problem-solving skills",
      "Ability to work well in a team"
      ],
      "extra_information": {
        "Job Type": "Full Time",
        "Location": "Victoria",
        "Offered Salary": "$20k - $40k",
        "Posted": "2023-04-02",
        "Experience": "2 Years",
        "Industry": "Medical",
        "Qualification": "Masters Degree",
        "position": 1
      }
  },
  {
    "id": 2,
      "date_posted": "2023-04-02",
      "category": "Nursing",
      "location": "Victoria",
      "job_type": "full time",
      "title": "Job 2",
      "job_description": "Provide specialized nursing care to critically ill patients in an intensive care unit. Must be able to monitor patients, administer medications and treatments, and collaborate with a multidisciplinary team of healthcare professionals.",
      "requirements": [
        "Bachelor's degree in Nursing",
      "Current registration with AHPRA as a Registered Nurse",
      "Minimum 5 years of experience in critical care nursing",
      "Postgraduate qualification in critical care nursing",
      "Excellent communication and problem-solving skills",
      "Ability to work well in a team"
      ],
      "extra_information": {
        "Job Type": "Full Time",
        "Location": "Victoria",
        "Offered Salary": "$20k - $40k",
        "Posted": "2023-04-02",
        "Experience": "2 Years",
        "Industry": "Medical",
        "Qualification": "Masters Degree",
        "position": 1
      }
  },
    ],
    "locations": [
    {
      "location": "New South Wales",
      "cover_image": "/images/locations/new-south-wales.png"
    },
    {
      "location": "Queensland",
      "cover_image": "/images/locations/queensland.png"
    },
    {
      "location": "Victoria",
      "cover_image": "/images/locations/victoria.png"
    },
    {
      "location": "South Australia",
      "cover_image": "/images/locations/south-australia.png"
    },
    {
      "location": "North Terrotory",
      "cover_image": "/images/locations/north-terrotory.png"
    },
    {
      "location": "Tasmania",
      "cover_image": "/images/locations/tasmania.png"
    }
    ]
}

```

In the `json` file, the locations is the list of locations which will be visible in the home page. make sure you don't modify this while adding jobs  

**After adding a job. Your json should look like this**

```js
{
  "jobs": [
  {
    "id": 1,
      "date_posted": "2023-04-02",
      "category": "Nursing",
      "location": "Victoria",
      "job_type": "full time",
      "title": "Clinical Nurse Specialist - Intensive Care Unit",
      "job_description": "Provide specialized nursing care to critically ill patients in an intensive care unit. Must be able to monitor patients, administer medications and treatments, and collaborate with a multidisciplinary team of healthcare professionals.",
      "requirements": [
        "Bachelor's degree in Nursing",
      "Current registration with AHPRA as a Registered Nurse",
      "Minimum 5 years of experience in critical care nursing",
      "Postgraduate qualification in critical care nursing",
      "Excellent communication and problem-solving skills",
      "Ability to work well in a team"
      ],
      "extra_information": {
        "Job Type": "Full Time",
        "Location": "Victoria",
        "Offered Salary": "$20k - $40k",
        "Posted": "2023-04-02",
        "Experience": "2 Years",
        "Industry": "Medical",
        "Qualification": "Masters Degree",
        "position": 1
      }
  },
    ],
    "locations": [
    {
      "location": "New South Wales",
      "cover_image": "/images/locations/new-south-wales.png"
    },
    {
      "location": "Queensland",
      "cover_image": "/images/locations/queensland.png"
    },
    {
      "location": "Victoria",
      "cover_image": "/images/locations/victoria.png"
    },
    {
      "location": "South Australia",
      "cover_image": "/images/locations/south-australia.png"
    },
    {
      "location": "North Terrotory",
      "cover_image": "/images/locations/north-terrotory.png"
    },
    {
      "location": "Tasmania",
      "cover_image": "/images/locations/tasmania.png"
    }
    ]
}
```

## Adding news
locate `data/news.json`
```js
{
  "news": [
    {
      "id": 1,
      "date_posted": "2022-05-19",
      "category": "Nursing",
      "title": "Nurse Unit Manager - Surgical Ward",
      "exerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eu massa aliquet ultricies. Donec euismod, nisl vitae aliquam aliquam, nunc nisl aliquet nunc, vi",
      "featured_image": "/images/news.jpg"
    },
  ]
}
```


> :warning: **If the structure of this `json` is corrupted, even in a single comma, the site will not function properly



