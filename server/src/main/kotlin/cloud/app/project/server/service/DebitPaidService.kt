package cloud.app.project.server.service

import cloud.app.project.server.model.CreditPaid
import cloud.app.project.server.model.DebitPaid
import cloud.app.project.server.repository.DebitPaidRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class DebitPaidService {
    @Autowired
    private lateinit var debitPaidRepo: DebitPaidRepo

    fun getAllDebitPaid(pageable: Pageable): Page<DebitPaid> {
        return debitPaidRepo.findAll(pageable)
    }
    fun getByUpdDate(year: String, pageable: Pageable): Page<DebitPaid> {
        return debitPaidRepo.findByYear(year, pageable)
    }

    fun getByCustId(custId: String, pageable: Pageable): Page<DebitPaid> {
        return  debitPaidRepo.findByCustId(custId, pageable)
    }

    fun getByFilterParam(custId: String, year: String, pageable: Pageable): Page<DebitPaid> {
        return debitPaidRepo.findByFilterParam(custId, year, pageable)
    }
}