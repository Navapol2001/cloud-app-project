package cloud.app.project.server.controller

import cloud.app.project.server.model.CrTrckView
import cloud.app.project.server.service.CrTrckViewService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/crTrck")
class CrTrckViewController {
    @Autowired
    private lateinit var crTrckViewService: CrTrckViewService

    @GetMapping
    fun getAll(): List<CrTrckView> {
        return crTrckViewService.getAllCrTrckView()
    }
}