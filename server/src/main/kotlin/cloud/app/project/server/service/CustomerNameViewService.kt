package cloud.app.project.server.service

import cloud.app.project.server.model.AmountCreditTrackingView
import cloud.app.project.server.model.CustomerNameView
import cloud.app.project.server.repository.AmountCreditTrackingViewRepo
import cloud.app.project.server.repository.CustomerNameViewRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class CustomerNameViewService {
    @Autowired
    private lateinit var customerNameViewRepo: CustomerNameViewRepo

    fun getAllCustomerNameView(): List<CustomerNameView> {
        return customerNameViewRepo.findAll()
    }
}