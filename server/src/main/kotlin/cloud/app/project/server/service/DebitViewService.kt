package cloud.app.project.server.service

import cloud.app.project.server.model.DebitView
import cloud.app.project.server.repository.DebitViewRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class DebitViewService {
    @Autowired
    private lateinit var debitViewRepo: DebitViewRepo

    fun getAllDebitView(pageable: Pageable): MutableList<DebitView> {
        return debitViewRepo.findAll()
    }

    fun getByUpdDate(year: String, pageable: Pageable): Page<DebitView> {
        return debitViewRepo.findByYear(year, pageable)
    }

    fun getByCustId(custId: String, pageable: Pageable): Page<DebitView> {
        return  debitViewRepo.findByCustId(custId, pageable)
    }

    fun getByFilterParam(custId: String, year: String, pageable: Pageable): Page<DebitView> {
        return debitViewRepo.findByFilterParam(custId, year, pageable)
    }

}