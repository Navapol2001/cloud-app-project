package cloud.app.project.server.controller

import cloud.app.project.server.model.CreditView
import cloud.app.project.server.service.CreditViewService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.format.annotation.DateTimeFormat
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.CrossOrigin;
import java.time.LocalDate

@RestController
@RequestMapping("/api/creditView")
class CreditViewController {
    @Autowired
    private lateinit var creditViewService: CreditViewService

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping
    fun getAll(): List<CreditView> {
        return creditViewService.getAllCreditView()
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/filter")
    fun getFilter(@RequestParam("year") year: String): List<CreditView> {
        return creditViewService.getByUpdDate(year)
    }
}