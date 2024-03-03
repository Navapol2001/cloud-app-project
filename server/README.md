# Load Monitoring API service

## Setup environment

### Local environment

In module server uncomment spring.datasource.url #localmachine within file gradle.properties and src/resource/application.properties

#### Build module

1. IntelliJ: click run `ServerApplication`
2. VScode: search ">Gradle" --> Tasks --> run `build`

### Cloud environment

In module server uncomment spring.datasource.url #docker-compose within file gradle.properties and src/resource/application.properties

## List of API path
- `/api/creditView` - For table creditView(รายงานเจ้าหนี้รายตัว)
- `/api/creditTrackingView` - For table creditTrackingView(รายการบิลเจ้าหนี้ค้างชำระ)
- `/api/creditPaid` - For table creditPaid(รายการชำระตามประเภทเจ้าหนี้)
- `/api/debitView` - For table debitView(รายงานเจ้าหนี้รายตัว)
- `/api/debitTrackingView` - For table debitTrackingView(รายการบิลลูกหนี้ค้างรับ)
- `/api/debitPaid` - For table debitPaid(รายการชำระตามประเภทลูกหนี้)
