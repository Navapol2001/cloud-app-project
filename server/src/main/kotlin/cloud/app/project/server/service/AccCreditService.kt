package cloud.app.project.server.service

import cloud.app.project.server.model.AccCredit
import cloud.app.project.server.repository.AccCreditRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class AccCreditService {

    @Autowired private lateinit var accCreditRepo: AccCreditRepo

    fun getAllAccCredit(): List<AccCredit> {
        return accCreditRepo.findAll()
    }
}