package cloud.app.project.server.repository

import cloud.app.project.server.model.DebitView
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable

@Repository
interface DebitViewRepo: JpaRepository<DebitView, Int> {

    @Query("""
        SELECT a FROM DebitView a WHERE SUBSTRING(a.upd_date, 1, 4) = :year
    """)
    fun findByYear(year: String, pageable: Pageable): Page<DebitView>

    @Query("""
        SELECT a FROM DebitView a WHERE a.cust_id LIKE %:custId% 
        OR a.customer_name LIKE %:custId%
    """)
    fun findByCustId(custId: String, pageable: Pageable): Page<DebitView>

    @Query("""
        SELECT a FROM DebitView a 
        WHERE (a.cust_id LIKE CONCAT('%', :custId, '%') OR a.customer_name LIKE CONCAT('%', :custId, '%')) 
        AND SUBSTRING(a.upd_date, 1, 4) = :year
    """)
    fun findByFilterParam(custId: String, year: String, pageable: Pageable): Page<DebitView>

}