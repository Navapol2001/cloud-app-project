package cloud.app.project.server.service

import cloud.app.project.server.model.CreditPaid
import cloud.app.project.server.model.CreditTrackingView
import cloud.app.project.server.repository.CreditPaidRepo
import cloud.app.project.server.repository.CreditTrackingViewRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class CreditPaidService {
    @Autowired
    private lateinit var creditPaidRepo: CreditPaidRepo

    fun getAllCreditPaid(pageable: Pageable): Page<CreditPaid> {
        return creditPaidRepo.findAll(pageable)
    }

    fun getByUpdDate(year: String, pageable: Pageable): Page<CreditPaid> {
        return creditPaidRepo.findByYear(year, pageable)
    }

    fun getByCustId(custId: String, pageable: Pageable): Page<CreditPaid> {
        return  creditPaidRepo.findByCustId(custId, pageable)
    }

    fun getByFilterParam(custId: String, year: String, pageable: Pageable): Page<CreditPaid> {
        return creditPaidRepo.findByFilterParam(custId, year, pageable)
    }
}