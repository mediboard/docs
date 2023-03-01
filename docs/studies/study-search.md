---
sidebar_position: 1
---

# Search

Semantically search studies by title and description. Returns a list of studies and their IDs

## Endpoint

**URL** : `/api/studies/search?<query_params>`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

| parameter  | value                                               | data type  |
|------------|-----------------------------------------------------|------------|
| q          | search query                                        | string     |
| conditions | condition ids where the effects came from           | array[int] |
| treatments | treatment ids that the studies investigated         | array[int] |
| gender     | filter studies by gender                            | string     |
| phase      | study phase                                         | string     |
| results    | does the study have results                         | boolean    |
| reason     | reason trial was canceled if any                    | string     |
| add_ons    | additional treatments added on to primary treatment | boolean    |


## Examples

```jsx title="GET https://api.mediboard.fyi/api/studies/search?limit=10&page=1&short_title=time&status=SUSPENDED"
{
    "next": 2,
    "studies": [
        {
            "completion_date": "2013-03-01",
            "conditions": [
                {
                    "condition_group": null,
                    "id": 919,
                    "name": "Polycystic Ovary Syndrome"
                }
            ],
            "description": "At the present the first options to induce ovulation in polycystic ovary syndrome with anovulatory infertility are clomiphene citrate (CC) and metformin. Notwithstanding the effectiveness of CC and metformin alone or in a sequential or combined regimen, a percentage of patients ranging from 5% to 30% remain anovulatory. For these patients, the use of gonadotropins for controlled ovarian stimulation (COS) is indicated.\n\nMoreover, to date it isn't clear if COS should be followed by timed intercourse (TI) or intrauterine insemination (IUI).\n\nThe aim of the present study will be to compare TI and IUI in infertile PCOS patients undergoing COS in terms of cost-benefit.",
            "external_ids": [
                "NCT00502281"
            ],
            "gender": "gender.FEMALE",
            "id": 145282,
            "intervention_type": "intervention_type.PARALLEL_ASSIGNMENT",
            "max_age": 35,
            "min_age": 18,
            "min_age_units": "max_age_units.YEARS",
            "official_title": "Timed Intercourse Versus Intrauterine Insemination in Infertile Patients Undergoing Gonadotropin Ovarian Stimulation",
            "phase": "Phase 4",
            "purpose": "Treatment",
            "responsible_party": "Stefano Palomba",
            "results_summary": null,
            "short_title": "Controlled Ovarian Stimulation Followed by Timed Intercourse or Intrauterine Insemination in Infertile PCOS Patients",
            "sponsor": "University Magna Graecia",
            "status": "Suspended",
            "stopped_reason": "NA",
            "treatments": [],
            "type": "Interventional",
            "upload_date": "Mon, 01 Apr 2013 00:00:00 GMT"
        },
        {
            "completion_date": "None",
            "conditions": [
                {
                    "condition_group": null,
                    "id": 56,
                    "name": "Cardiovascular Disease"
                }
            ],
            "description": "To evaluate the efficacy of Hemolink™ in combination with Intraoperative Autologous Donation (IAD) versus control (IAD alone) in facilitating avoidance of allogeneic RBC transfusion during and following primary CABG surgery",
            "external_ids": [
                "NCT00038454"
            ],
            "gender": "gender.ALL",
            "id": 348238,
            "intervention_type": "intervention_type.SINGLE_GROUP_ASSIGNMENT",
            "max_age": 80,
            "min_age": 18,
            "min_age_units": "max_age_units.YEARS",
            "official_title": "A Phase II, Randomized, Single-Blind, Controlled Clinical Trial to Evaluate the Efficacy and Safety of Hemolink[Tm] (o-Raffinose Cross-Linked Human Hemoglobin) in Subjects Undergoing Primary Coronary Artery Bypass Grafting Surgery",
            "phase": "Phase 2 Phase 3",
            "purpose": "Treatment",
            "responsible_party": "NA",
            "results_summary": null,
            "short_title": "Phase II Study To Evaluate The Safety and Efficacy of Hemoglobin Raffimer in Patients Undergoing First Time CABG Surgery",
            "sponsor": "Hemosol",
            "status": "Suspended",
            "stopped_reason": "NA",
            "treatments": [
                {
                    "description": null,
                    "from_study": null,
                    "id": 2011,
                    "name": "chrysarobin",
                    "no_studies": null,
                    "treatment_group": null
                }
            ],
            "type": "Interventional",
            "upload_date": "Tue, 01 Apr 2003 00:00:00 GMT"
        },
        {
            "completion_date": "2022-08-01",
            "conditions": [
                {
                    "condition_group": null,
                    "id": 572,
                    "name": "Oncology"
                },
                {
                    "condition_group": null,
                    "id": 29,
                    "name": "Breast Cancer"
                },
                {
                    "condition_group": null,
                    "id": 44617,
                    "name": "Cancer Diagnosis"
                },
                {
                    "condition_group": null,
                    "id": 56355,
                    "name": "Margins of Excision"
                },
                {
                    "condition_group": null,
                    "id": 56356,
                    "name": "Margins, Tumor-Free"
                }
            ],
            "description": "Our investigational team has developed a technology to visualize the operative margins in 'real time,' in other words during the operation while the patient is still on the table. While different surgeons use different operative techniques, our technique involves removing the main lumpectomy specimen, marking two of its borders with suture to orient the specimen for correct pathologic evaluation.\n\nThe FLIM (Fluorescent Lifetime Imaging Microscopy) technique can differentiate between cancerous and noncancerous specimens using a complex algorithm that essentially utilizes a definitive delta between the metabolic activities of diseased and non-diseased tissue. The research coordinator along with the surgeon will be able to insert the lumpectomy specimen followed by the 6 shaved margins (one by one) in a matter of minutes once the specimens have been resected. To be clear, the FLIM analysis will be taking place in- vitro. The device is invitro test and would be tested against the gold standard the pathologist biopsy.\n\nFLIM analysis by the surgeon will not take more than several minutes, therefore not adding any significant time for patient to be under anesthesia. All specimens will be removed from the patient's body prior to their evaluation by the FLIM technique. Our team will not be making decisions based on FLIM analysis during this early phase of study. In other words, even if FLIM suggests a positive margin still exists in the body, our team will not act on these results by resecting additional tissue at this stage. FLIM margin results will be compared directly with pathology results for accuracy of the findings.",
            "external_ids": [
                "NCT04683120"
            ],
            "gender": "gender.FEMALE",
            "id": 187283,
            "intervention_type": "intervention_type.SINGLE_GROUP_ASSIGNMENT",
            "max_age": -1,
            "min_age": 18,
            "min_age_units": "max_age_units.NA",
            "official_title": "Real-time Diagnosis and Visualization of Tumor Margins in Excised Breast Specimens Using Zenith FLIM Diagnostics",
            "phase": "Na",
            "purpose": "Diagnostic",
            "responsible_party": "NA",
            "results_summary": null,
            "short_title": "Real-time Diagnosis and Visualization of Tumor Margins in Excised Breast Specimens Using Zenith FLIM Diagnostics",
            "sponsor": "Laser LabCorp",
            "status": "Suspended",
            "stopped_reason": "New Medical Team and Surgical Center Location",
            "treatments": [],
            "type": "Interventional",
            "upload_date": "Tue, 01 Jun 2021 00:00:00 GMT"
        },
        {
            "completion_date": "2023-01-01",
            "conditions": [
                {
                    "condition_group": null,
                    "id": 11395,
                    "name": "Preoxygenation"
                }
            ],
            "description": "The purpose of this study is to examine the ability of a nasal cannula sensor to predict end-tidal oxygen levels in real time.",
            "external_ids": [
                "NCT03840486"
            ],
            "gender": "gender.ALL",
            "id": 263332,
            "intervention_type": "intervention_type.PARALLEL_ASSIGNMENT",
            "max_age": -1,
            "min_age": 18,
            "min_age_units": "max_age_units.NA",
            "official_title": "Real Time Assessment of Pre-oxygenation Utilizing End-tidal Oxygen Measurements Versus Single Breath End-Tidal Oxygen Measurements in Healthy Volunteers",
            "phase": "Phase 4",
            "purpose": "Other",
            "responsible_party": "Steven Lindsey",
            "results_summary": null,
            "short_title": "Pre-oxygenation With Real Time End-tidal Oxygen Measurements Versus Single Breath Measurements",
            "sponsor": "Emory University",
            "status": "Suspended",
            "stopped_reason": "Study is temporarily suspended due to COVID-19.",
            "treatments": [],
            "type": "Interventional",
            "upload_date": "Sat, 01 Jan 2022 00:00:00 GMT"
        },
        {
            "completion_date": "2024-05-01",
            "conditions": [
                {
                    "condition_group": null,
                    "id": 68132,
                    "name": "Paralytic Lagophthalmos"
                }
            ],
            "description": "To develop a real-time wearable device based on the principle of magnetic force for temporary management of lagophthalmos, and evaluate its efficacy and safety, including synchronous blinks and eye closure, blurred vision, foreign body sensation over cornea or eyeball, burning or hot sensation over facial skin, and erythema or pruritus over eyelid, by performing a human trial on patients with lagophthalmos.",
            "external_ids": [
                "NCT03848260"
            ],
            "gender": "gender.ALL",
            "id": 263912,
            "intervention_type": "intervention_type.SINGLE_GROUP_ASSIGNMENT",
            "max_age": 85,
            "min_age": 18,
            "min_age_units": "max_age_units.YEARS",
            "official_title": "A Real-Time Magnetic Device Prototype for Management of Paralytic Lagophthalmos",
            "phase": "Na",
            "purpose": "Treatment",
            "responsible_party": "NA",
            "results_summary": null,
            "short_title": "A Real-Time Magnetic Device Prototype for Temporary Management of Paralytic Lagophthalmos",
            "sponsor": "E-DA Hospital",
            "status": "Suspended",
            "stopped_reason": "The device prototype was broken and fixed in 2020. The new simplified and miniaturized device will be finished and used on May 1, 2022.",
            "treatments": [],
            "type": "Interventional",
            "upload_date": "Tue, 01 Feb 2022 00:00:00 GMT"
        },
        {
            "completion_date": "2012-11-01",
            "conditions": [
                {
                    "condition_group": null,
                    "id": 1846,
                    "name": "Hyperbaric Oxygen Therapy"
                },
                {
                    "condition_group": null,
                    "id": 33670,
                    "name": "Recovery Time"
                },
                {
                    "condition_group": null,
                    "id": 11342,
                    "name": "Contrast Media"
                },
                {
                    "condition_group": null,
                    "id": 62691,
                    "name": "Sonography"
                }
            ],
            "description": "This project is meant to show wether the HBOT can fasten the recovery process after surgical treatment of distal Radius fractures. For this propose the microcirculation is measured, together with the level of pain on a visual analog scale (VAS) and the remaining force of the hand after surgery is examined. Furthermore the sonography with contrast medium which is long established for examination of organs of the parenchyma, is meant to be verified at the muscular-skeletal system in this project.",
            "external_ids": [
                "NCT01365780"
            ],
            "gender": "gender.ALL",
            "id": 320165,
            "intervention_type": "intervention_type.PARALLEL_ASSIGNMENT",
            "max_age": -1,
            "min_age": 18,
            "min_age_units": "max_age_units.NA",
            "official_title": "Identification of Microcirculation in Distal Radius Fractures After Surgical Treatment With and Without Hyperbaric Oxygen Therapy (HBOT)",
            "phase": "Na",
            "purpose": "Treatment",
            "responsible_party": "NA",
            "results_summary": null,
            "short_title": "Hyperbaric Oxygen Therapy in Distal Radius Fractures: Can it Shorten Recovery Time and Increase Fracture Healing?",
            "sponsor": "RWTH Aachen University",
            "status": "Suspended",
            "stopped_reason": "nump\n\nacceptence by patient too low",
            "treatments": [],
            "type": "Interventional",
            "upload_date": "Thu, 01 Nov 2012 00:00:00 GMT"
        },
        {
            "completion_date": "2099-11-01",
            "conditions": [
                {
                    "condition_group": null,
                    "id": 772,
                    "name": "Renal Insufficiency"
                },
                {
                    "condition_group": null,
                    "id": 770,
                    "name": "Acute Kidney Injury"
                },
                {
                    "condition_group": null,
                    "id": 3445,
                    "name": "Contrast-induced Nephropathy"
                }
            ],
            "description": "Risk of contrast-induced kidney injury is expected to be strongly correlated with exposure time. Studies on the excretion of iodinated contrast material are few and have mostly been carried out in patients with normal renal function. Although case wise reports of persistent renograms have been published, it is not known how long contrast is retained before excretion in patients with eGFR <30 mL/min/1.73m2, nor which of these patients are most susceptible to contrast retention. The current observational study aims to compare contrast elimination time and % contrast excretion in patients with eGFR <30 mL/min/1.73m2, to matched patients (for age, sex and contrast procedure type) with eGFR 30-59 and eGFR >=60 mL/min/1.73m2.",
            "external_ids": [
                "NCT04603261"
            ],
            "gender": "gender.ALL",
            "id": 377664,
            "intervention_type": "intervention_type.NA",
            "max_age": -1,
            "min_age": 18,
            "min_age_units": "max_age_units.NA",
            "official_title": "Time to Excretion of Contrast, a Maastricht Prospective Observational Study",
            "phase": "Na",
            "purpose": "Na",
            "responsible_party": "NA",
            "results_summary": null,
            "short_title": "Time to Excretion of Contrast, a Maastricht Prospective Observational Study",
            "sponsor": "Maastricht University Medical Center",
            "status": "Suspended",
            "stopped_reason": "delayed",
            "treatments": [],
            "type": "Observational",
            "upload_date": "Fri, 01 Apr 2022 00:00:00 GMT"
        },
        {
            "completion_date": "2018-01-01",
            "conditions": [
                {
                    "condition_group": null,
                    "id": 432,
                    "name": "Pancreatitis"
                }
            ],
            "description": "The aim of this study is to compare the cannulation time during primary wire guided ERCP (Endoscopic Retrograde Cholangio-Pancreatography) according to two different length of guide wire: long wire or short wire rapid exchange, artery by a prospective randomized trial.",
            "external_ids": [
                "NCT02290769"
            ],
            "gender": "gender.ALL",
            "id": 351077,
            "intervention_type": "intervention_type.PARALLEL_ASSIGNMENT",
            "max_age": -1,
            "min_age": 18,
            "min_age_units": "max_age_units.NA",
            "official_title": "Evaluation of the Cannulation Time During Primary ERCP With Short Guide Wire Rapid Exchange or With Long Guide Wire. Multicentre Prospective Randomized Trial",
            "phase": "Na",
            "purpose": "Treatment",
            "responsible_party": "NA",
            "results_summary": null,
            "short_title": "Time of Cannulation During Primary ERCP With Short Guide Wire Rapid Exchange or With Long Guide Wire",
            "sponsor": "Niguarda Hospital",
            "status": "Suspended",
            "stopped_reason": "Hospital administrative problems",
            "treatments": [],
            "type": "Interventional",
            "upload_date": "Sun, 01 Aug 2021 00:00:00 GMT"
        },
        {
            "completion_date": "2023-01-01",
            "conditions": [
                {
                    "condition_group": null,
                    "id": 145,
                    "name": "Cancer"
                },
                {
                    "condition_group": null,
                    "id": 128,
                    "name": "Diabetes"
                }
            ],
            "description": "To test the use of a continuous activity and heart rate tracker (Fitbit) and continuous glucose monitor (CGM) in monitoring daily exercise-related activities.",
            "external_ids": [
                "NCT05124405"
            ],
            "gender": "gender.ALL",
            "id": 77429,
            "intervention_type": "intervention_type.SINGLE_GROUP_ASSIGNMENT",
            "max_age": -1,
            "min_age": 18,
            "min_age_units": "max_age_units.NA",
            "official_title": "Monitoring Your Exercise-related Metrics Over Time Via Wearable Electronic Devices",
            "phase": "Na",
            "purpose": "Prevention",
            "responsible_party": "NA",
            "results_summary": null,
            "short_title": "Monitoring Your Exercise-related Metrics Over Time Via Wearable Electronic Devices",
            "sponsor": "M.D. Anderson Cancer Center",
            "status": "Suspended",
            "stopped_reason": "PI request",
            "treatments": [],
            "type": "Interventional",
            "upload_date": "Mon, 01 Aug 2022 00:00:00 GMT"
        },
        {
            "completion_date": "2024-04-01",
            "conditions": [
                {
                    "condition_group": null,
                    "id": 17052,
                    "name": "Blepharoptosis"
                }
            ],
            "description": "To develop a real-time magnetic device prototype for temporary management of blepharoptosis and evaluate its efficacy and safety, including the gain of palpebral fissure height, visual axis obstruction, blurred vision, foreign body sensation over the cornea, burning or hot sensation over facial skin, and erythema or pruritus over the eyelid, by performing a human trial on patients with unilateral blepharoptosis.",
            "external_ids": [
                "NCT03812016"
            ],
            "gender": "gender.ALL",
            "id": 92411,
            "intervention_type": "intervention_type.SINGLE_GROUP_ASSIGNMENT",
            "max_age": 85,
            "min_age": 18,
            "min_age_units": "max_age_units.YEARS",
            "official_title": "A Real-time Magnetic Device for Management of Blepharoptosis",
            "phase": "Na",
            "purpose": "Treatment",
            "responsible_party": "Tu, Yuan-Kun",
            "results_summary": null,
            "short_title": "A Real-time Magnetic Device for Temporary Management of Blepharoptosis",
            "sponsor": "E-DA Hospital",
            "status": "Suspended",
            "stopped_reason": "The device prototype was broken and fixed in 2020. The new simplified and miniaturized device will be finished and used on April 1, 2022.",
            "treatments": [],
            "type": "Interventional",
            "upload_date": "Tue, 01 Feb 2022 00:00:00 GMT"
        }
    ],
    "total": 12
}
```